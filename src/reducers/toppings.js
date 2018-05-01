import { ADD_TOPPING } from '../actions/index'

export default function(state = [], action = {}) {
  switch(action.type) {
    case ADD_TOPPING:
      if (state.length < 3) {
        return state.concat(action.payload)
        } else {
        return state
        }
    default:
      return state
   }
}