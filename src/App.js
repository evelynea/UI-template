import './App.css';
import Dashboard from './Dashboard/dashboard';
import Login from './login';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Page2 from './Dashboard/page2';
import UserLogin from './userLogin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/userlogin" component={UserLogin} />
        {/* <Route path="/page" component={Page2} /> */}
        <Route path="/" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
