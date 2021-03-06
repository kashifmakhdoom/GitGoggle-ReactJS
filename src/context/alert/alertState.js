import React, {useReducer} from 'react';

import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../types'


const AlertState = props => {
  const intialState = null;

  const [state, dispatch] = useReducer(AlertReducer, intialState);

  // alert
  const showAlert = (msg, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {msg, type}
    })
   
    setTimeout(() => dispatch({type: HIDE_ALERT}), 5000)
  }

  return <AlertContext.Provider
    value={{
      alert: state,
      showAlert
    }}>
      {props.children}
  </AlertContext.Provider>
};

export default AlertState;