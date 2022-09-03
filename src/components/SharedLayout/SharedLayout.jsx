import {
  Container,
  Header,
  NavigationLink,
  AutorizationLink,
} from './SharedJayout.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
        </nav>
        <div>
          <AutorizationLink to="/Register">Sign up</AutorizationLink>
          <AutorizationLink to="/login">Log In</AutorizationLink>
        </div>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
