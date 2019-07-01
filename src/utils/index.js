export const baseURL = 'https://ah-backend-dojo-dev.herokuapp.com/api';
const token = sessionStorage.getItem('token');

export const isAuthenticated = () => {
  if (token) { return true; }
  return false;
};
