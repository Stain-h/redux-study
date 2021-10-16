import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useContext} from 'react'
import { addTodo } from './redux/actions'
import ReduxContext from './context/ReduxContext';

function useReduxState() {
  const store = useContext(ReduxContext);

  const [state, setState] = useState(store.getState())
  
  useEffect(() => {
    const unsubscribe = store.subscribe(()=> {
      setState(store.getState());
    })
    return () => {
      unsubscribe();
    }
  }, [store]);

  return state;
}

function useReduxDispatch() {
  const store = useContext(ReduxContext);
   
  return store.dispatch;
}


function App() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)} 
        <button onClick={click}>추가</button>
      </header>
    </div>
  );
  function click() {
    dispatch(addTodo('todo'));
  }
}


export default App;
