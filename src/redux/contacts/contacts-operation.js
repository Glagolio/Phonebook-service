import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk(
  'contacts/addContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {}
  }
);

// const fetchContacts = () => async () => {
//   try {
//     const { data } = await axios.get('/contacts');
//     return data;
//   } catch (error) {}
// };

const contactsOperation = { fetchContacts, addContact };

export default contactsOperation;
