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
        if (pizzaBases[this.props.pizzaBases]) {
       return (pizzaBases[this.props.pizzaBases] )
     } else 
       return 0
     }
    
     saucePrice() {
        if (pizzaSauces[this.props.pizzaSauce]) {
       return (pizzaSauces[this.props.pizzaSauce] )
     } else 
       return 0
     }
    
     totalPrice() {
         const totalWithDrone = this.pizzaPrice() + this.saucePrice() 
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
        console.log(pizzaSauces[this.props.pizzaSauce])

        return(
            <div>
                <p>{this.totalPrice()}</p>

                <input onClick= {this.handelClick} id="checkBox" type="checkbox" />
 
            </div>     
        )
    }
}     
         
    

function mapStateToProps(state){
    return {
      pizzaBases: state.pizzaBases,
      pizzaSauce: state.pizzaSauces
    }
  }
  
  
export default connect(mapStateToProps)(TotalPrice)