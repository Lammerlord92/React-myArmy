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
        <Link to='/signup'><Icon>group_add</Icon></Link>
      </NavItem>
      <NavItem>  
        <Link to='/login'><Icon>group</Icon></Link>
      </NavItem>
      
        <SideNav
            trigger={<NavItem><Link to='#'><Icon>menu</Icon></Link></NavItem>}
            options={{ closeOnClick: true }}
            >
            <SideNavItem userView
              user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com'
              }}
            />
            <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
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