import React from "react";

import { Container, Left, Right, Title, Text } from "./styles/jumbotron";
type PropsJumbotron = {
  children?: React.ReactNode;
};

const Jumbotron = ({ children, ...restProps }: PropsJumbotron) => {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Left = ({ children, ...restProps }: PropsJumbotron) => {
  return <Left {...restProps}>{children}</Left>;
};

Jumbotron.Right = ({ children, ...restProps }: PropsJumbotron) => {
  return <Right {...restProps}>{children}</Right>;
};

Jumbotron.Text = ({ children, ...restProps }: PropsJumbotron) => {
  return <Text {...restProps}>{children}</Text>;
};

Jumbotron.Title = ({ children, ...restProps }: PropsJumbotron) => {
  return <Title {...restProps}>{children}</Title>;
};

export default Jumbotron;
