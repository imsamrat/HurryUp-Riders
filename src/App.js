import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Header/Login/Login';
import Home from './components/Header/Home/Home';
import Destination from './components/Header/Destination/Destination';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const[loggedInUser, setLoggedInUser] = useState({});
  return (
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/destination/:details">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
