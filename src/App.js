import React from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import Home from './initial/Home.js';
import Login from './initial/Login.js';
import Signup from './initial/Signup.js';

const Header =() => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Sign up</Link>
      <Link to='/login'>Login</Link>
    </nav>
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