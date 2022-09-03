import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './contactsSlice';
import { contactsApi } from './contactsApi';
import { authSlice } from './auth/auth-slice';
import { contactsSlice } from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(contactsApi.middleware),
});
