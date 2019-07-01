import axios from 'axios';
import {
  AUTHENTICATE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

const baseURL = 'https://irepoter-v3.herokuapp.com/api/v2/auth/';

const authenticate = () => ({
  type: AUTHENTICATE,
});

const signupSuccess = response => ({
  type: REGISTER_SUCCESS,
  payload: response.data.user,
});

const signupFail = error => ({
  type: REGISTER_FAIL,
  payload: error.response.data.message,
});

const signupAction = user => (dispatch) => {
  dispatch(authenticate());
  axios
    .post(`${baseURL}signup`, user)
    .then((response) => {
      dispatch(signupSuccess(response));
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('username', response.data.user.username);
      window.location.replace('/');
    })
    .catch((error) => {
      dispatch(signupFail(error));
    });
};

export default signupAction;

// export const loginAction = (user, history) => axios
//   .post(`${baseURL}login`, user)
//   .then((response) => {
//     localStorage.setItem('accessToken', response.data.user.token);
//     localStorage.setItem('username', response.data.user.username);
//     localStorage.setItem('email', response.data.user.email);
//     localStorage.setItem('userAuthenticated', true);
//     notify.show('Login successful', 'success', 4000);
//     history.push('/dashboard');
//   })
//   .catch((error) => {
//     if (error.response) {
//       const errorObject = error.response.data.message;
//       const errorMessage = errorObject[Object.keys(errorObject)[0]][0];
//       notify.show(errorMessage, 'error', 4000);
//     }
//   });
