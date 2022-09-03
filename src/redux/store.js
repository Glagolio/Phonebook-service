import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './contactsSlice';
import { contactsApi } from './contactsApi';
import { authSlice } from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
