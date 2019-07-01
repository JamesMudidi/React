import React, { Component } from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';
import './FooterStyle.css';

class Footer extends Component {
  render() {
    return (
      <MDBFooter className="font-small pt-0 mt-0" background-color="#e9ecef">
        <MDBContainer fluid className="text-center text-md-left" />
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
          &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
Copyright:
            {' '}
            <a href="iRepoter"> iRepoter </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
