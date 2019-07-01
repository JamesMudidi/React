import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarStyle.css';

class Head extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" fixed="top">
        <Navbar.Brand href="http://localhost:8080/">iRepoter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href=""></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="http://localhost:8080/login">Login</Nav.Link>
            <Nav.Link href="http://localhost:8080/signup">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Head;
