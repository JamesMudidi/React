import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/userActions';
import { isLoggedInUser } from '../../pages/Landing';
import Head from '../Navbar';
import Footer from '../Footer';
import './loginStyle.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    const { loginAction } = this.props;
    const {
      email,
      password,
    } = this.state;
    loginAction(
      email,
      password,
    );
  };

  render() {
    const {
      email,
      password,
    } = this.state;
    const {
      isLoading,
    } = this.props;

    return (
      <React.Fragment>
        <Head loginLink="" signupLink={isLoggedInUser()} />
        <Jumbotron className="login">
          <div className="signStr spacebottom"><h2>Login</h2></div>
          <form>
            {isLoading && (
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            )}
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
              type="password"
              name="password"
              onChange={this.onChangeHandler}
              value={password}
              placeholder="Password"
            />
            <br />
            <Button variant="primary" onClick={this.onSubmitHandler}>Login</Button>
            <br />
            <br />
            <div className="forgot">
              <span data-toggle="modal" data-target="#forgotPassword">
                Forgot password?
              </span>
              &nbsp;
              <Button variant="primary">Reset</Button>
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
  }
}

const mapStateToProps = state => ({
  login: state.loginReducer.user,
  isLoading: state.loginReducer.isLoading,
  loginErrors: state.loginReducer.loginErrors,
});

export default connect(mapStateToProps, { loginAction })(Login);
