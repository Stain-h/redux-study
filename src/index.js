import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import {addTodo} from './redux/actions'

const unsubscribe = store.subscribe(()=> {
  console.log(store.getState())
})
store.dispatch(addTodo('coding'))
store.dispatch(addTodo('nice'))
store.dispatch(addTodo('to'))
unsubscribe()
store.dispatch(addTodo('coding'))
store.dispatch(addTodo('nice'))
store.dispatch(addTodo('to'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
