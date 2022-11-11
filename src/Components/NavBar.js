import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import trfLogoNavbar from '../Resources/trf-logo-navbar.png'
import './NavBar.css'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar fixed="top" style={{backgroundColor: "#07090F", paddingLeft: "0px"}} className="NavBarMainDiv" expand="md">
        <NavItem>
            <Link to="/">
              <img src={trfLogoNavbar} alt="trf logo navbar" className="trfLogoNavbar"/>
              </Link>
        </NavItem>
        <NavbarToggler className="navBarToggleMenu" onClick={toggle}  style={{margin: "0px", fontSize: "2vw"}}>
            H
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar  style={{paddingLeft: "20px"}}>
          <Nav className="ml-auto" navbar>
            <NavItem className="navBarItem">
                <NavLink activeStyle={{color:'#3EDBF0'}}   className="navBarTabs" to="/alumini"  style={{marginRight: "4.3vw"}}>Alumni</NavLink>
            </NavItem>
            <NavItem className="navBarItem">
                <NavLink activeStyle={{color:'#3EDBF0'}} className="navBarTabs" to="/achievements" style={{marginRight: "4.3vw"}}>Achievements</NavLink>
            </NavItem>
            <NavItem className="navBarItem">
                <NavLink activeStyle={{color:'#3EDBF0'}} className="navBarTabs" to="/team" style={{marginRight: "4.3vw"}}>Team</NavLink>
            </NavItem>
            <NavItem className="navBarItem">
                <NavLink activeStyle={{color:'#3EDBF0'}}className="navBarTabs" to="/projects" style={{marginRight: "4.3vw"}}>Projects</NavLink>
            </NavItem>
            <NavItem className="navBarItem">
                <NavLink activeStyle={{color:'#3EDBF0'}} className="navBarTabs" to="/blogs" style={{marginRight: "4.3vw"}}>Blog</NavLink>
            </NavItem>
            <NavItem className="navBarItem">
                <NavLink activeStyle={{color:'#3EDBF0'}} className="navBarTabs" to="/developers" style={{marginRight: "1vw"}}>Developer’s Page</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;