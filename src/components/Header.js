import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => (
  
    <Navbar collapseOnSelect expand="lg"  variant="dark" className="nav">
  <Navbar.Brand href="#landing">KHANDELWAL</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

  <Nav className="mr-auto">
    <Nav.Link href="#info">Info</Nav.Link>
    <Nav.Link href="#projects">Projects</Nav.Link>
    <Nav.Link href="#icons">Contact</Nav.Link>
    <Nav.Link href="https://medium.com/@kparth2010">Blogs</Nav.Link>
   </Nav>
   </Navbar.Collapse>
  </Navbar> 
  
  
);

export default Header;
