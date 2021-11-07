import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../components/TodoList'
import { completeTodo } from '../redux/modules/todos';

function TodoListContainer() {
  /*
    **Container의 역할
    store 연결 -> store에 있는 state 꺼내어 
    필요한 것을 props 로 넣어주는 역할
  */
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)

  return <TodoList todos={todos} />//click={handleClick}/>

  // function handleClick(i){
  //   dispatch(completeTodo())
  // }
}

export default TodoListContainer;