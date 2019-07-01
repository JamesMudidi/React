import React from 'react';
import PropTypes from 'prop-types';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Head from '../Navbar';
import Footer from '../Footer';
import './registerStyle.css';

const Register = ({
  firstname, lastname, othernames, phonenumber, password, handleSubmit, onChange,
}) => (
  <React.Fragment>
    <Head />
    <Jumbotron className="register">
      <div className="signStr spacebottom"><h2>Register</h2></div>
      <form>
        <input
          className="form-control"
          type="text"
          name="firstname"
          value={firstname}
          onChangeInput={onChange}
          placeholder="Firstname"
        />
        <input
          className="form-control"
          type="text"
          name="lastname"
          value={lastname}
          onChangeInput={onChange}
          placeholder="Lastname"
        />
        <input
          className="form-control"
          type="text"
          name="othernames"
          value={othernames}
          onChangeInput={onChange}
          placeholder="Othernames"
        />
        <input
          className="form-control"
          type="phonenumber"
          name="phonenumber"
          value={phonenumber}
          onChangeInput={onChange}
          placeholder="Phonenumber"
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
        <div>
          <span>
              Already a member?
            {' '}
            <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </Jumbotron>
    <Footer />
  </React.Fragment>
);

Register.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  othernames: PropTypes.string,
  phonenumber: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

Register.defaultProps = {
  firstname: '',
  lastname: '',
  othernames: '',
  phonenumber: '',
  password: '',
  handleSubmit: () => { },
  onChange: () => { },
};

export default Register;
