import './App.css';
import { Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history'
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route exact path="/" component={Home}></Route>
      <Route path="/todos" component={Todos}></Route>
      <Route path="/users" component={Users}></Route>
    </ConnectedRouter>
  );
}

export default App;
