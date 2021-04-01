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
import AddProductd from "./components/AddProductd/AddProductd";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Header from './components/Header/Header'
function App() {
  return (
    <Router>
      <Header></Header>
    <div>
   

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
      <Route path='/admin/addProduct'>
          <AddProductd></AddProductd>
        </Route>
        <Route path='/admin/manageProduct'>
         <ManageProduct></ManageProduct>
        </Route>
    </div>
  </Router>
  );
}

export default App;
