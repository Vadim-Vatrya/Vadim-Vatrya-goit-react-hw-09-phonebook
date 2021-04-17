import {combineReducers} from 'redux';
import {createReducer} from  '@reduxjs/toolkit';
import authActions from './auth-actions';
// import { createSlice } from '@reduxjs/toolkit';
// import authOperations from './auth-operations';


const initialUserState = { name: null, email: null };


const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.logoutError]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});


const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});


const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});



// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [authOperations.register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//   },
//   [authOperations.login.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//   },
//   [authOperations.logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//   },
//   [authOperations.getCurrentUser.pending](state) {
//       state.isFetchingCurrentUser = true;
//   },
//   [authOperations.getCurrentUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//   },
//   [authOperations.getCurrentUser.rejected](state) {
//       state.isFetchingCurrentUser = false;
//   },
//   }
// });

// export default authSlice;



