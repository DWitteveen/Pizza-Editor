import { ADD_SAUCE } from '../actions/index'

export default function (state = null, action= {}) {
    switch (action.type) {
      case ADD_SAUCE:
      return action.payload.value
      default:
        return state
    }
  }