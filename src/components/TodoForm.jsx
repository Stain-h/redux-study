import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

export default function TodoForm() {
  const inpRef = useRef();
  const dispatch = useReduxDispatch();
  
  return (
    <div>
      <input type="text" ref={inpRef}/>
      <button onClick={click}>추가</button>
    </div>
  )

  function click(){
    dispatch(addTodo(inpRef.current.value));
  }
}
