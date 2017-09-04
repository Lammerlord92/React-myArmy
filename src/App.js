import React from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import {Navbar, NavItem, SideNav, SideNavItem, Button, Icon} from 'react-materialize';
import Home from './initial/Home.js';
import Login from './initial/Login.js';
import Signup from './initial/Signup.js';

const Header =() => {
  return (
    <Navbar right>
      <NavItem>
        <Link to='/'><Icon>home</Icon></Link>
      </NavItem>
      <NavItem>
        <Link to='/signup'><Icon>person_add</Icon></Link>
      </NavItem>
      <NavItem>  
        <Link to='/login'><Icon>person</Icon></Link>
      </NavItem>
      
      <SideNav
        trigger={<NavItem><Link to='#'><Icon>menu</Icon></Link></NavItem>}
        options={{ closeOnClick: true, edge: 'right', }}>
        <SideNavItem userView
          user={{
            background: 'img/react-materialize-logo.svg',
            image: 'img/react-materialize-logo.svg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem icon="home"> <Link to='/'>First Link With Icon</Link></SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
      </SideNav>
      
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
      </div>
    </Router>
  );

}

export default App;