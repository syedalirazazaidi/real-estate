import React from "react";

import { Wrapper, Header, Title, Content } from "./styles/formWrapper";
type PropsFormWrapper = {
  children?: React.ReactNode;
};

const FormWrapper = ({ children, ...restProps }: PropsFormWrapper) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

FormWrapper.Header = ({ children, ...restProps }: PropsFormWrapper) => {
  return <Header {...restProps}>{children}</Header>;
};
FormWrapper.Title = ({ children, ...restProps }: PropsFormWrapper) => {
  return <Title {...restProps}>{children}</Title>;
};

FormWrapper.Content = ({ children, ...restProps }: PropsFormWrapper) => {
  return <Content {...restProps}>{children}</Content>;
};

export default FormWrapper;
