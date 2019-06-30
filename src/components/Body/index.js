import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './BodyStyle.css';

class Body extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">Hello!</h1>
          <p className="lead">
            Welcome to iRepoter
          </p>
          <hr className="my-2" />
          <p className="text">
            iReporter enables any/every citizen to bring any form of corruption
            to the notice of appropriate authorities and the general public.
            Users can also report on things that need government intervention
            around the community
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Body;
