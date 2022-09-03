import {
  Container,
  Header,
  NavigationLink,
  AutorizationLink,
} from './SharedJayout.styled';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';

const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Container>
      <Header>
        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
        </nav>
        <div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <AutorizationLink to="/Register">Sign up</AutorizationLink>
              <AutorizationLink to="/login">Log In</AutorizationLink>
            </>
          )}
        </div>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
