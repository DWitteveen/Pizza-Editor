// import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'
// import shoppingCart from '../reducers/shoppingCart'
// import addedProducts from '../reducers/pizzaEditor'
// import addProduct from '../actions/productPrice'



// class Toppings extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {value: "" }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     console.log('You: ' + this.state.value);
//     this.props.dispatch({type:'ADD_PRODUCT', payload: this.state.value})
//     }

  

//   render() {
//     return (
//         <div>
//          <form onSubmit={this.handleSubmit}>
//           <label>
//           <h3>Add some toppings</h3>
//           <select  onChange={this.handleChange}>
//             <option value="" >Select topping</option>
//             <option value="Pineapple" price="0.50" >Pineapple €0.50 </option>
//             <option value="Corn" price="0.50">Corn €0.50 </option>
//             <option value="Olives" price="0.50">Olives €0.50 </option>
//             <option value="Red union" price="0.50">Red union €0.50 </option>
//             <option value="Spinach" price="0.50">Spinach €0.50 </option>
//             <option value="Cherry tomatoes" price="0.50">Cherry tomatoes €0.50 </option>
//             <option value="Chicken" price="0.50">Chicken €0.50 </option>
//           </select>
//           </label>
//          </form>
//          <form onSubmit={this.handleSubmit}>
//           <label>
//           <select value={this.state.price} onChange={this.handleChange}>
//             <option value="" >Select topping</option>
//             <option value="Pineapple2" price="0.50" >Pineapple €0.50 </option>
//             <option value="Corn2" price="0.50">Corn €0.50 </option>
//             <option value="Olives2" price="0.50">Olives €0.50 </option>
//             <option value="Red union2" price="0.50">Red union €0.50 </option>
//             <option value="Spinach2" price="0.50">Spinach €0.50 </option>
//             <option value="Cherry tomatoes2" price="0.50">Cherry tomatoes €0.50 </option>
//             <option value="Chicken2" price="0.50">Chicken €0.50 </option>
//           </select>
//           </label>
//          </form>

//          <form onSubmit={this.handleSubmit}>
//           <label>
//           <select value={this.state.price} onChange={this.handleChange}>
//             <option value="" >Select topping</option>
//             <option value="Pineapple3" price="0.50" >Pineapple €0.50 </option>
//             <option value="Corn3" price="0.50">Corn €0.50 </option>
//             <option value="Olives3" price="0.50">Olives €0.50 </option>
//             <option value="Red union3" price="0.50">Red union €0.50 </option>
//             <option value="Spinach3" price="0.50">Spinach €0.50 </option>
//             <option value="Cherry tomatoes3" price="0.50">Cherry tomatoes €0.50 </option>
//             <option value="Chicken3" price="0.50">Chicken €0.50 </option>
//           </select>
//           </label>
//          </form>
        
//         <br />
//         <input onClick ={this.handleSubmit} type="submit" value="Add" />
//         <br />
//         <br />
        
//         <p>Turbo-drone-delivery</p><input type="checkbox" id="id-checkbox"/>
        
//         <br />
//         <h3> Your total price = {this.props.shoppingCart}</h3>
        
 
//       </div>

  

//           );
//       }
//   }        

//   const mapStateToProps = (state) => {
//     return {
//       shoppingCart: state.shoppingCart, pizza: state.addedProducts
//     }
//   }  

//   export default connect (mapStateToProps)(Toppings)