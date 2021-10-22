import { useRef } from "react";

export default function TodoForm({ add }) {
  const inpRef = useRef();
  
  return (
    <div>
      <input type="text" ref={inpRef}/>
      <button onClick={click}>추가</button>
    </div>
  )

  function click(){
    add(inpRef.current.value);
  }
}
 