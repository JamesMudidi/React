import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

export default class PageNotFound extends Component {
  render() {
    return (
      <Alert alert-light justify-content-sm-center>
        404
        <br />
        {' '}
        The page you have requested for does not exist
      </Alert>
    );
  }
}
