import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => (
  
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
   </Nav>
   </Navbar.Collapse>
  </Navbar> 
  
  
);

export default Header;
