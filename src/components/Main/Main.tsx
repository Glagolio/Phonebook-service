import React from 'react';
import { MainPage, Title } from './Main.styled';

type IProps = {
  title: string;
  children?: React.ReactChild;
};

const Main: React.FC<IProps> = ({ title, children }): JSX.Element => (
  <MainPage>
    <Title>{title}</Title>
    {children}
  </MainPage>
);

export default Main;
