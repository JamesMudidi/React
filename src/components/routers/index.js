import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const username = sessionStorage.getItem('username');

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (username ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    ))
    }
  />
);


export default ProtectedRoute;
