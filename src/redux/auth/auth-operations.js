import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';



const userToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// /*
//  * POST @ /users/signup
//  * body { name, email, password }
//  *
//  * После успешной регистрации добавляем токен в HTTP-заголовок
//  */



const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  axios
  .post('/users/signup', credentials)
  .then(({data}) => {
    userToken.set(data.token);
    dispatch(authActions.registerSuccess(data));
  })
  .catch(error => dispatch(authActions.registerError(error.message)));
};


// /*
//  * POST @ /users/login
//  * body:
//  *    { email, password }
//  *
//  * После успешного логина добавляем токен в HTTP-заголовок
//  */



const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());
  axios
  .post('/users/login', credentials)
    .then(({ data }) => {
      userToken.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => dispatch(authActions.loginError(error.message)));
};


// /*
//  * POST @ /users/logout
//  * headers:
//  *    Authorization: Bearer token
//  *
//  * 1. После успешного логаута, удаляем токен из HTTP-заголовка
//  */

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      userToken.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error.message)));
};

// /*
//  * GET @ /users/current
//  * headers:
//  *    Authorization: Bearer token
//  *
//  * 1. Забираем токен из стейта через getState()
//  * 2. Если токена нет, выходим не выполняя никаких операций
//  * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
//  */


const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  userToken.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    .get('/users/current')
    .then(({ data }) => {
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};


/*eslint-disable*/
export default { register, logOut, login, getCurrentUser };

// const register = createAsyncThunk(
  //   '/users/register',
  //   async (user, { rejectWithValue }) => {
  //     try {
  //       const {data} = await axios.post('/users/signup', user);
  //       userToken.set(data.token);
  //       return data;
  //     } catch (error) {
  //       return rejectWithValue(error);
  //     }
  //   }
  // );


// const login = createAsyncThunk(
//   'auth/login',
//   async (user, { rejectWithValue }) => {
//     try {
//       const {data} = await axios.post('/users/login', user);
//       userToken.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );


// const logOut = createAsyncThunk(
//   '/users/logout',
//   async (user, { rejectWithValue }) => {
//     try {
//       await axios.post('/users/logout', user);
//       userToken.unset();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );


// const getCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//         return thunkAPI.rejectWithValue();
//     }
//     userToken.set(persistedToken);
//     try {
//         const { data } = await axios.get('/users/current');
//         return data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//     }
//   },
// )