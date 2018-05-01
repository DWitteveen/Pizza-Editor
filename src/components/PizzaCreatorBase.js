import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addBase} from '../actions/index'
// import { pizzaBases } from './PizzaBases'
import store from '../store'
import './style.css'


class PizzaCreatorBase extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    store.dispatch(addBase({value: event.target.value}))
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  
    render() {
      return (
        <div>
        <img className="logo" alt ="" src="https://goo.gl/5aSahb"></img>
        <form onSubmit={this.handleSubmit}>
          <label>
          <h1>Pick your pizza Bottom</h1>
            <select value={this.state.value} 
            // price={this.state.price} 
            onChange={this.handleChange}>
              <option value="25cm NY Style">25cm NY Style € 8,99</option>
              <option value="30cm NY Style">30cm NY Style € 11,49</option>
              <option value="35cm NY Style">35cm NY Style € 13,49</option>
              <option value="20cm NY Style">20cm NY Style € 6,45</option>
            </select>
          </label>
        </form>
        </div>
      )
    }
  }
  
  const mapStateToProps = function (state) {
    return {
      pizzaBases: state.pizzaBases,
     
    
    }
  }

  
  export default connect(mapStateToProps, {addBase})(PizzaCreatorBase)
  