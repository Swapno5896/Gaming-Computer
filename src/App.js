import React, { createContext, useState } from "react";
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";
export const UserContext = createContext();
function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({name:"",email:"",photoUrl:""})
  const [addedProduct, setAddedProduct] = useState({name:"",price:"",photoUrl:"",BuingDate:new Date()})
console.log(addedProduct);
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser,addedProduct, setAddedProduct]}>

  
              <Router>
                <Header></Header>
              <div>
                {/* <h1> email :{loggedInUser.email},addedProduct name :{addedProduct.name} .</h1> */}
            

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path='/logIn'>
                  <LogIn></LogIn>
                  </Route>
                  <PrivateRoute path='/order'>
                    <Order></Order>
                  </PrivateRoute>
                  <PrivateRoute path='/checkOut'>
                    <CheckOut/>
                  </PrivateRoute>
                  <PrivateRoute path='/admin'>
                    <Admin></Admin>
                  </PrivateRoute>
                </Switch>
                <Route path='/admin/addProduct'>
                    <AddProductd></AddProductd>
                  </Route>
                  <Route path='/admin/manageProduct'>
                  <ManageProduct></ManageProduct>
                  </Route>
              </div>
            </Router>
  </UserContext.Provider>
  );
}

export default App;
