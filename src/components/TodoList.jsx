import { useDispatch } from "react-redux";
import { completeTodo } from "../redux/modules/todos";

export default function TodoList({ todos }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo, i) => {
        return (
          <li key={i}>{todo.text}<button onClick={()=> {dispatch(completeTodo(i))}}>완료</button></li>
        )
      })}
    </ul>
    
  );
}