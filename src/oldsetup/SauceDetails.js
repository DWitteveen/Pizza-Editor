// import React, {PureComponent} from 'react'


// export default class Sauce extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'pizza'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//         <div>
//       <form onSubmit={this.handleSubmit}>
        
//         <label>
//          <br />
//           <h3> Add some sauce</h3>
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="Select sauce">Select sauce</option>
//             <option value="White sauce" price="0.50">White sauce €0.50 </option>
//             <option value="Red sauce" price="0.50">Red sauce €0.50 </option>
//             <option value="Double red sauce"price="0.50">Double red sauce €0.50 </option>
//             <option value="Mix it up" price="0.50">Mix it up €1.50 </option>>
//             </select>
//           </label>
//          </form>
//       <br />
//       <input type="submit" value="Add" />
//       </div>
 
//   );
// }
// }