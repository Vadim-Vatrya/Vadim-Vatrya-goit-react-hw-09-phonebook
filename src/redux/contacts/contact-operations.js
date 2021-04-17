import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
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
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from './contact-actions';


axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';


export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};


export const addContact = contact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};


export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export const updateContact = (id, name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(updateContactRequest());
  axios
    .patch(`/contacts/${id}`, contact)
    .then(({ data }) => {
      dispatch(updateContactSuccess(data));
    })
    .catch(error => dispatch(updateContactError(error.message)));
};

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//       try {
//           const { data } = await axios.get('/contacts');
//           return data;
//       } catch (error) {
//           return rejectWithValue(error);
//       }
//   },
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//       try {
//           const { data } = await axios.post('/contacts', contact);
//           return data;
//       } catch (error) {
//           return rejectWithValue(error);
//       }
//   },
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//       try {
//           await axios.delete(`/contacts/${contactId}`);
//           return contactId;
//       } catch (error) {
//           return rejectWithValue(error);
//       }
//   },
// );

// export const updateContact = createAsyncThunk(
//     'contacts/updateContact',
//     async ({ contactId, name, number }, { rejectWithValue }) => {
//         try {
//             const { data } = await axios.patch(`/contacts/${contactId}`, {
//                 name,
//                 number,
//             });
//             return data;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     },
// );