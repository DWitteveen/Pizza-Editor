import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addTopping} from '../actions/index'
// import {pizzaSauces} from './PizzaSauces'
import store from '../store'



class PizzaCreatorTopping extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {value: ''};


 this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    store.dispatch(addTopping(event.target.value))
}

  handleSubmit(event) {
        event.preventDefault();
      }

      render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>
            <h1>Pick your Toppings</h1>
              <select value={this.state.value} 
              price={this.state.value.price} 
              onChange={this.handleChange}>
                <option value="Pineapple € 0.50" price="0.50">Pineapple € 0,50</option>
                <option value="Corn € 0.50">Corn € 0,50</option>
                <option value="Olives (green) € 0.50">Olives (green) € 0,50</option>
                <option value="Red onion € 0.50">Red onion € 0,50</option>
                <option value="Spinach € 0.50">Spinach € 0,50</option>
                <option value="Cherry tomatoes € 0.50">Cherry tomatoes € 0,50</option>
                <option value="Chicken € 0.50">Chicken € 0,50</option>
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

  
  export default connect(mapStateToProps,{addTopping})(PizzaCreatorTopping)