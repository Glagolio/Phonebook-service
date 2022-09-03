import { createSlice } from '@reduxjs/toolkit';
import contactsOperation from './contacts-operation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [contactsOperation.fetchContacts.fulfilled](state, action) {
      return action.payload;
    },
    [contactsOperation.addContact.fulfilled](state, action) {
      //   return [...state, ...action.payload];
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
