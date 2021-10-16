import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import ReduxContext from './context/ReduxContext';
// import {addTodo, completeTodo, showAll, showComplete} from './redux/actions'

// store.subscribe(()=> {
//   console.log(store.getState())
// })

// store.dispatch(addTodo('할일'))
// store.dispatch(completeTodo(0))
// store.dispatch(showComplete())


ReactDOM.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
