const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;

/*eslint-disable*/
export default {
  getIsAuthenticated,
  getUserName,
};