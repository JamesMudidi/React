import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarStyle.css';

class Head extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" fixed="top">
        <Navbar.Brand href="#home">iRepoter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#memes">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Head;
