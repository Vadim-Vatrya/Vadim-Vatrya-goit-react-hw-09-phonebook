const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state =>
    state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getIsFetchingCurrent
};
export default authSelectors;