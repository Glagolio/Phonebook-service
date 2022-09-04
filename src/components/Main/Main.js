import React from 'react';
import { MainPage, Title } from './Main.styled';
import PropTypes from 'prop-types';

const Main = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    <MainPage>{children}</MainPage>
  </>
);

export default Main;

Main.propTypes = {
  title: PropTypes.string.isRequired,
};
