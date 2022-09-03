import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: space-between;
  & > nav {
    display: flex;
  }
`;

export const NavigationLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const AutorizationLink = styled(NavLink)`
  margin-left: auto;
  text-decoration: none;

  color: black;
  font-weight: 500;

  transition: color 250ms linear;

  &.active {
    color: orangered;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: orangered;
  }
`;
