import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { pizzaBases} from './PizzaBases'
import { pizzaSauces} from './PizzaSauces'


class TotalPrice extends PureComponent {
    constructor (props) {
        super(props) ;

    this.state = {turbodrone: false}
    
    this.handelClick = this.handelClick.bind(this)

    }
  
     pizzaPrice() {
        if (pizzaBases[this.props.pizzaBase]) {
       return (pizzaBases[this.props.pizzaBase] )
     } else 
       return 0
     }
    
     saucePrice() {
        if (pizzaSauces[this.props.pizzaSauce]) {
       return (pizzaSauces[this.props.pizzaSauce] )
     } else 
       return 0
     }

     toppingPrice() {
        console.log('test',this.props.pizzaTopping)
        if (this.props.pizzaTopping) {
       return (this.props.pizzaTopping.length*0.5)
     } else 
       return 0
     }
    
     
     totalPrice() {
         const totalWithDrone = this.pizzaPrice() + this.saucePrice() + this.toppingPrice() 
         if (this.state.turbodrone) {
            return totalWithDrone * 1.10
         } else {
         return totalWithDrone 
      }
    
  
     }
    
     handelClick() {
        console.log(this.state.turbodrone)
       if (this.state.turbodrone) {
           return this.setState({turbodrone: false}) 
       } else {
           return this.setState({turbodrone: true})
       }
     }
    
        

     render() { 
        console.log(this.state.turbodrone)
        console.log(pizzaSauces[this.props.pizzaTopping])

        return(
            <div>         
                <p>Turbo drone delivery?</p><input  onClick= {this.handelClick} id="checkBox" type="checkbox" />               
                <p className = "result"> Your total price: € {this.totalPrice().toFixed(2)}</p>        
             </div>     
        )
    }
}     
         
    

function mapStateToProps(state){
    return {
      pizzaBase: state.pizzaBases,
      pizzaSauce: state.pizzaSauces,
      pizzaTopping: state.pizzaToppings
    }
  }
  
  
export default connect(mapStateToProps)(TotalPrice)