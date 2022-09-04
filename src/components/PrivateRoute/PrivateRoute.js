import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Route>
  );
}
