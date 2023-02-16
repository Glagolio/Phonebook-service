import React from 'react';
import { MainPage, Title } from './Main.styled';
// import PropTypes from 'prop-types';

type IProps = {
  title: string;
  children?: React.ReactChild;
};

const Main: React.FC = ({ title, children }: IProps): JSX.Element => (
  <MainPage>
    <Title>{title}</Title>
    {children}
  </MainPage>
);

export default Main;

// Main.propTypes = {
//   title: PropTypes.string.isRequired,
// };
