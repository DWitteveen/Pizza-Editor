import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addSauce} from '../actions/index'
// import {pizzaSauces} from './PizzaSauces'
import store from '../store'



class PizzaCreatorSauce extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {value: ''};


 this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    store.dispatch(addSauce({value: event.target.value}))
}

  handleSubmit(event) {
        event.preventDefault();
      }

      render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>
            <h1>Pick your Sauces</h1>
              <select value={this.state.value} 
              price={this.state.value.price} 
              onChange={this.handleChange}>
                <option value="White sauce">White sauce</option>
                <option value="Red sauce">Red sauce</option>
                <option value="Double red sauce">Double red sauce € 1,00</option>
                <option value="Mix it up">Mix it up € 1,50</option>
              </select>
            </label>
          </form>
          </div> 
        )
     }
  }
        
  
  
  const mapStateToProps = function (state) {
    return {
      pizzaSauces: state.pizzaSauces,
    
    }
  }

  
  export default connect(mapStateToProps,{addSauce})(PizzaCreatorSauce)
 