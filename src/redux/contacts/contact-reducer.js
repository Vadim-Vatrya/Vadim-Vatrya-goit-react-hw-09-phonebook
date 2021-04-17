import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import * as contactsActions from './contact-actions';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from './contact-actions';
import authActions from '../../redux/auth/auth-actions';

// import { fetchContacts, addContact, deleteContact } from './contact-operations';

const initialState = [];
const itemsReducer = createReducer(initialState, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
         state.filter(({ id }) => id !== payload),
  [updateContactSuccess]: (state, action) =>
    state.map(contact =>
      contact.id === action.payload.id ? action.payload : contact,
    ),
  [authActions.logoutSuccess]: () => [],
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload.trim(),
});

const LoadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [updateContactRequest]: () => true,
  [updateContactSuccess]: () => false,
  [updateContactError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchContactsError]: setError,
  [addContactError]: setError,
  [deleteContactError]: setError,
  [updateContactError]: setError,
});

// const itemsReducer = createReducer([], {
//     [fetchContacts.fulfilled]: (_, { payload }) => payload,
//     [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
//     [deleteContact.fulfilled]: (state, { payload }) =>
//         state.filter(({ id }) => id !== payload),
// });


// const filterReducer = createReducer('', {
//     [changeFilter]: (_, { payload }) => payload,
// });

// const LoadingReducer = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false,
//     [addContact.pending]: () => true,
//     [addContact.fulfilled]: () => false,
//     [addContact.rejected]: () => false,
//     [deleteContact.pending]: () => true,
//     [deleteContact.fulfilled]: () => false,
//     [deleteContact.rejected]: () => false,
// })


const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: LoadingReducer,
    error
});

export default contactsReducer;