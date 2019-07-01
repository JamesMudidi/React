import React from 'react';
import Head from '../../components/Navbar';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import 'react-bootstrap';

const username = sessionStorage.getItem('username');
export const isLoggedInUser = () => {
  let placeholder = 'Logout';
  console.log(username);
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

const Landing = () => (
  <div>
    <Head loginLink={isLoggedOutInUser()} signupLink={isLoggedInUser()} />
    <Body />
    <Footer />
  </div>
);

export default Landing;
