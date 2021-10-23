import './App.css';
import UserListContainer from './containers/UserListContainer';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}


export default App;
