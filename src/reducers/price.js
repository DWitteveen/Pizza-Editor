import { TOTAL_PRICE } from '../actions/index'

const initialState = 0

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case TOTAL_PRICE :
      return action.payload
    default :
      return state
  }
}