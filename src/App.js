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
        options={{ closeOnClick: true }}>
        <SideNavItem userView
          user={{
            background: 'img/6809725-simple-vintage-backgrounds.jpg',
            image: 'img/modern-technological-elements-with-transparent-background_1035-7108.jpg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <Link to='/signup'><SideNavItem waves icon="home">First Link With Icon</SideNavItem></Link>
        <SideNavItem waves >Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves>Third Link With Waves</SideNavItem>
      </SideNav>
      
    </Navbar>
  );

}

const App =() => {
  return (
    <Router>
      <div>
        <Header/>
        <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        </div>
      </div>
    </Router>
  );

}

export default App;