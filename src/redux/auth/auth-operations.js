import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';



const token = {
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

const register = createAsyncThunk(
    'users/register',
    async (user, { rejectWithValue }) => {
      try {
        const {data} = await axios.post('/users/signup', user);
        token.set(data.token);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

// /*
//  * POST @ /users/login
//  * body:
//  *    { email, password }
//  *
//  * После успешного логина добавляем токен в HTTP-заголовок
//  */



const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
      try {
          const { data } = await axios.post('/users/login', user);
          token.set(data.token);
          return data;
      } catch (error) {
          return rejectWithValue(error);
      }
  },
);

//  * POST @ /users/logout
//  * headers:
//  *    Authorization: Bearer token
//  *
//  * 1. После успешного логаута, удаляем токен из HTTP-заголовка
//  */


const logOut = createAsyncThunk(
  '/users/logout',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', user);
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// /*
//  * GET @ /users/current
//  * headers:
//  *    Authorization: Bearer token
//  *
//  * 1. Забираем токен из стейта через getState()
//  * 2. Если токена нет, выходим не выполняя никаких операций
//  * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
//  */


const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(5);
    }
    token.set(persistedToken);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
  },
);


/*eslint-disable*/
export default { register, logOut, logIn, getCurrentUser };







