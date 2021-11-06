import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history'

function App() {
  return (
    <BrowserRouter history={history}>
        <Route exact path="/" component={Home}></Route>
        <Route path="/todos" component={Todos}></Route>
        <Route path="/users" component={Users}></Route>
    </BrowserRouter>
  );
}


export default App;
