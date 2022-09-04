import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import ContactsPage from '../pages/Contacts';
import Register from './Register/Register';
import LogIn from './LogIn/LogIn';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import authOperation from '../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  dispatch(authOperation.fetchCurrentUser());

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<ContactsPage />} />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
