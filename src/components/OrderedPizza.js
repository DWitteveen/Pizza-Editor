import React, {PureComponent} from 'react'
import {connect} from 'react-redux'


class OrderedPizza extends PureComponent {
    render() {
        return(
            <div>
                <p>Your pizza Base:</p>
                <p className = "result">{this.props.pizzaBases}</p>
                <p>Your pizza Toppings:</p>
                <p className = "result">{this.props.pizzaToppings + ""}</p>
                <p>Your pizza Sauce:</p>
                <p className = "result">{this.props.pizzaSauces}</p>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
    pizzaBases: state.pizzaBases,
    pizzaToppings: state.pizzaToppings,
    pizzaSauces: state.pizzaSauces
    }
}

export default connect (mapStateToProps)(OrderedPizza)