
import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../types'

const AlertReducer = (state, action) => {
  switch(action.type) {
    case SHOW_ALERT: 
      return action.payload;
    case HIDE_ALERT:
      return null;
    default:
      return state;
  }
}

export default AlertReducer;