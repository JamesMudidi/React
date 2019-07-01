import axios from 'axios';
import { toast } from 'react-toastify';
import {
  AUTHENTICATE,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
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

export const signupAction = user => (dispatch) => {
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

export const loginAction = (email, password) => (dispatch) => {
  dispatch({
    type: AUTHENTICATE,
  });
  axios
    .post(`${baseURL}login`, { email, password })
    .then((response) => {
      dispatch(signupSuccess(response));
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('username', response.data.user.username);
      window.location.replace('/');
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message,
      });
      if (error.response.data.message.email) {
        const emailError = error.response.data.message.email;
        toast.error(`:( ${emailError}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
      if (error.response.data.message.password) {
        const passwordError = error.response.data.message.password;
        toast.error(`:( ${passwordError}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    });
};
