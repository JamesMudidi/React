import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Head from '../../components/Navbar';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Incident from '../../components/Incident';

const username = sessionStorage.getItem('username');
export const isLoggedInUser = () => {
  let placeholder = 'Logout';
  if (username === null) {
    placeholder = 'Sign up';
  }
  return placeholder;
};
export const isLoggedOutInUser = () => {
  let placeholder = username;
  if (username === null) {
    placeholder = 'Login';
  }
  return placeholder;
};
export const isAuthenticated = () => {
  let placeholder = false;
  if (username === null) {
    placeholder = true;
  }
  return placeholder;
};

const Landing = () => (
  <div>
    <Head loginLink={isLoggedOutInUser()} signupLink={isLoggedInUser()} />
    {isAuthenticated() && <Body />}
    {!isAuthenticated() && <div><Jumbotron><Incident /></Jumbotron></div>}
    <Footer />
  </div>
);

export default Landing;
