import React from "react";

import {
  Container,
  FormGroup,
  Input,
  Select,
  Option,
  Label,
  SubmitInput,
  RangeInput,
  TextArea,
  Span,
} from "./styles/form";
type PropsForm = {
  children?: React.ReactNode;
};
type PropsDefault = {
  defaultValue: boolean;
};

const Form = ({ children, ...restProps }: PropsForm) => {
  return <Container {...restProps}>{children}</Container>;
};
Form.Select = ({ children, ...restProps }: PropsForm) => {
  return <Select {...restProps}>{children}</Select>;
};
Form.Option = ({ children, ...restProps }: PropsForm | any) => {
  return <Option {...restProps}>{children}</Option>;
};
Form.FormGroup = ({ children, ...restProps }: PropsForm) => {
  return <FormGroup {...restProps}>{children}</FormGroup>;
};
Form.TextArea = ({ children, ...restProps }: PropsForm) => {
  return <TextArea {...restProps}>{children}</TextArea>;
};
Form.Input = ({ children, ...restProps }: PropsForm) => {
  return <Input {...restProps} />;
};

Form.SubmitInput = ({ children, ...restProps }: PropsForm) => {
  return <SubmitInput {...restProps} />;
};

Form.SubmitInput = ({ children, ...restProps }: PropsForm) => {
  return <SubmitInput {...restProps} />;
};

Form.RangeInput = ({ children, ...restProps }: PropsForm) => {
  return <RangeInput {...restProps} />;
};

Form.Label = ({ children, ...restProps }: PropsForm) => {
  return <Label {...restProps}>{children}</Label>;
};

Form.Span = ({ children, ...restProps }: PropsForm) => {
  return <Span {...restProps}>{children}</Span>;
};

export default Form;
