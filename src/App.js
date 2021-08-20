 import './App.css';
 import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component= {Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
