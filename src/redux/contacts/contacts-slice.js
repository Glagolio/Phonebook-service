import { createSlice } from '@reduxjs/toolkit';
import contactsOperation from './contacts-operation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoad: false,
  },
  extraReducers: {
    [contactsOperation.fetchContacts.pending](state) {
      state.isLoad = true;
    },
    [contactsOperation.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoad = false;
    },
    [contactsOperation.addContact.pending](state) {
      state.isLoad = true;
    },
    [contactsOperation.addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
      state.isLoad = false;
    },
    [contactsOperation.deleteContact.pending](state) {
      state.isLoad = true;
    },
    [contactsOperation.deleteContact.fulfilled](state) {
      state.isLoad = false;
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
