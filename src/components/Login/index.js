import React from 'react';
import PropTypes from 'prop-types';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isLoggedInUser } from '../../pages/Landing';
import Head from '../Navbar';
import Footer from '../Footer';
import './loginStyle.css';


const Login = ({
  email, password, handleSubmit, onChange,
}) => (
  <React.Fragment>
    <Head loginLink="" signupLink={isLoggedInUser()} />
    <Jumbotron className="login">
      <div className="signStr spacebottom"><h2>Login</h2></div>
      <form>
        <input
          className="form-control"
          type="email"
          name="email"
          value={email}
          onChangeInput={onChange}
          placeholder="Email"
        />
        <input
          className="form-control"
          type="password"
          name="password"
          value={password}
          onChangeInput={onChange}
          placeholder="Password"
        />
        <Button variant="primary" handleSubmit={handleSubmit}>Signin</Button>
        <br />
        <br />
        <div className="forgot">
          <span data-toggle="modal" data-target="#forgotPassword">
              Forgot password?
          </span>
          &nbsp;
          <Button variant="primary" handleSubmit={handleSubmit}>Reset</Button>
        </div>
        <br />
        <div className="other">
          <span>
              Don’t have an account?
            {' '}
            <Link to="/signup">Signup</Link>
          </span>
        </div>
      </form>
    </Jumbotron>
    <Footer />
  </React.Fragment>
);

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

Login.defaultProps = {
  email: '',
  password: '',
  handleSubmit: () => { },
  onChange: () => { },
};

export default Login;
