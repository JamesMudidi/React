import { notify } from 'react-notify-toast';
import axios from 'axios';

const { baseURL } = 'https://irepoter-v3.herokuapp.com/api/v2/auth/';

export const signup = (user, history) => axios
  .post(`${baseURL}signup`, user)
  .then(() => {
    notify.show('Registration successful', 'success', 4000);
    history.push('/login');
  })
  .catch((error) => {
    if (error.response) {
      const errorObject = error.response.data.message;
      const errorMessage = errorObject[Object.keys(errorObject)[0]][0];
      notify.show(errorMessage, 'error', 4000);
    }
  });

export const Login = (user, history) => axios
  .post(`${baseURL}login`, user)
  .then((response) => {
    localStorage.setItem('accessToken', response.data.user.token);
    localStorage.setItem('username', response.data.user.username);
    localStorage.setItem('email', response.data.user.email);
    localStorage.setItem('userAuthenticated', true);
    notify.show('Login successful', 'success', 4000);
    history.push('/dashboard');
  })
  .catch((error) => {
    if (error.response) {
      const errorObject = error.response.data.message;
      const errorMessage = errorObject[Object.keys(errorObject)[0]][0];
      notify.show(errorMessage, 'error', 4000);
    }
  });
