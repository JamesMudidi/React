import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupAction } from '../../actions/userActions';
import { isLoggedOutInUser } from '../../pages/Landing';
import Head from '../Navbar';
import Footer from '../Footer';
import './registerStyle.css';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      othernames: '',
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitHandler = () => {
    const { signupAction } = this.props;
    const {
      firstname,
      lastname,
      othernames,
      username,
      email,
      phoneNumber,
      password,
    } = this.state;
    signupAction({
      firstname,
      lastname,
      othernames,
      username,
      email,
      phoneNumber,
      password,
    });
  };

  render() {
    const {
      firstname,
      lastname,
      othernames,
      username,
      email,
      phoneNumber,
      password,
    } = this.state;
    const {
      isLoading,
    } = this.props;

    return (
      <React.Fragment>
        <Head loginLink={isLoggedOutInUser()} signupLink="" />
        <Jumbotron className="register">
          <div className="signStr spacebottom"><h2>Register</h2></div>
          <form>
            {isLoading && (
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            )}
            <input
              className="form-control"
              type="text"
              name="firstname"
              onChange={this.onChangeHandler}
              value={firstname}
              placeholder="Firstname"
            />
            <input
              className="form-control"
              type="text"
              name="lastname"
              onChange={this.onChangeHandler}
              value={lastname}
              placeholder="Lastname"
            />
            <input
              className="form-control"
              type="text"
              name="othernames"
              onChange={this.onChangeHandler}
              value={othernames}
              placeholder="Othernames"
            />
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={this.onChangeHandler}
              value={username}
              placeholder="Username"
            />
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChangeHandler}
              value={email}
              placeholder="Email"
            />
            <input
              className="form-control"
              type="tel"
              name="phoneNumber"
              onChange={this.onChangeHandler}
              value={phoneNumber}
              placeholder="Phonenumber"
            />
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChangeHandler}
              value={password}
              placeholder="Password"
            />
            <Button variant="primary" onClick={this.onSubmitHandler}>Signin</Button>
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
  }
}

const mapStateToProps = state => ({
  singin: state.registerReducer.user,
  isLoading: state.registerReducer.isLoading,
  loginErrors: state.registerReducer.loginErrors,
});

export default connect(mapStateToProps, { signupAction })(Register);
