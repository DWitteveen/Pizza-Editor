export const ADD_BASE = "ADD_BASE"
export const ADD_SAUCE = "ADD_SAUCE"
export const ADD_TOPPING = "ADD_TOPPING"
export const TOTAL_PRICE = "TOTAL_PRICE"


export const addBase = (base) => {
  return {
    type: ADD_BASE,
    payload: base
  }
}

export const addSauce = (sauce) => {
  return {
    type: ADD_SAUCE,
    payload: sauce
  }
}

export const addTopping = (topping) => {
  return {
    type: ADD_TOPPING,
    payload: topping
  }
}

export const totalPrice = ( price ) => {
  return {
    type: TOTAL_PRICE,
    payload: price
  }
}

