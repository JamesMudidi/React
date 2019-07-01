import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './NavbarStyle.css';

const Head = (props) => {
  const {
    loginLink,
    signupLink,
  } = props;

  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" fixed="top">
      <Navbar.Brand href="http://localhost:8080/">iRepoter</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href=""></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">{loginLink}</Nav.Link>
          <Nav.Link href="/signup">{signupLink}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Head.propTypes = {
  loginLink: PropTypes.string.isRequired,
  signupLink: PropTypes.string.isRequired,
};

export default Head;
