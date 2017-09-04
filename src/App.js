import React from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import Home from './initial/Home.js';
import Login from './initial/Login.js';
import Signup from './initial/Signup.js';

const Header =() => {
  return (
    <Navbar right>
      <NavItem>
        <Link to='/'>Home</Link>
      </NavItem>
      <NavItem>
        <Link to='/signup'>Sign up</Link>
      </NavItem>
      <NavItem>  
        <Link to='/login'>Login</Link>
      </NavItem>
    </Navbar>
  );

}

const App =() => {
  return (
    <Router>
      <div>
        <Header/>

        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <h2>Prueba</h2>
      </div>
    </Router>
  );

}

export default App;