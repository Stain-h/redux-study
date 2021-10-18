import {useState, useEffect, useContext} from 'react'
import ReduxContext from '../context/ReduxContext'

export default function useReduxState() {
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