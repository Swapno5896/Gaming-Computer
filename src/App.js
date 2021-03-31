import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from './components/LogIn/LogIn'
import CheckOut from './components/CheckOut/CheckOut'
import Admin from "./components/Admin/Admin";
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logIn">Log in</Link>
          </li>
          <li>
            <Link to="/checkOut">checkOut</Link>
          </li>
          <li>
           <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/logIn'>
         <LogIn></LogIn>
        </Route>
        <Route path='/checkOut'>
          <CheckOut/>
        </Route>
        <Route path='/admin'>
          <Admin></Admin>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
