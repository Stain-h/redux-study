import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList'

function TodoListContainer() {
  /*
    **Container의 역할
    store 연결 -> store에 있는 state 꺼내어 
    필요한 것을 props 로 넣어주는 역할
  */
  const todos = useSelector(state => state.todos)

  return <TodoList todos={todos} />
}

export default TodoListContainer;