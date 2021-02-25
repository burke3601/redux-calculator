import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import createStore
import { createStore } from 'redux';

//setting up default state
const defaultState = {
  value: 0
}

//Action constants and creator functions
const ADD = 'add';
const SUBTRACT = 'subtract';
const MULTIPLY = 'multiply';
const DIVIDE ='divide';

const add = (amount) => ({
    type: 'add',
    payload: {
      amount
    }

  }
);

const subtract = (amount) => ({
  type: 'subtract',
  payload: {
    amount
  }

}
);

const multiply = (amount) => ({
  type: 'multiply',
  payload: {
    amount
  }

}
);

const divide = (amount) => ({
  type: 'divide',
  payload: {
    amount
  }

}
);

// Reducer

const mathTime = (state, action) =>{
  if (!action) return state;
  if (!action.payload) return state;

  let newState = {
    ...state
  }

  switch (action.type){
    case ADD:
      newState.value += action.payload.amount;
      break;
    case SUBTRACT:
      newState.value -= action.payload.amount;
      break;
    case MULTIPLY:
      newState.value *= action.payload.amount;
      break;
    case DIVIDE:

      //need conditionals because you cannot divide  0
      if (action.payload.amount === 0 ){
        console.log(`can't divide by 0 SILLY GOOSE!!!!!!!!!!!!!`)
      } else {
      newState.value /= action.payload.amount;
      }
      break;
    default:
      break;
  }

  return newState;
}

//creating the store

const store = createStore(mathTime, defaultState);

window.store = store
window.add = add;
window.subtract = subtract;
window.multiply = multiply;
window.divide = divide;

//automatic console
store.subscribe(() => {
  console.log('=================UPDATED STATE============');
  console.table(store.getState())

})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
