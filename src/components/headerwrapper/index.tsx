import React from "react";
import {
  Header,
  Container,
  HeaderTitle,
  TitleLink,
  HeaderLinks,
  ListLinks,
  ListItem,
  ListAnchor,
  Button,
  Icon,
} from "./styles/headerwrapper";
type Props = {
  bg: string;
  fixed: boolean;
  children?: React.ReactNode;
  to?: string;
  special?: string;
};
type PropsConta = {
  children?: React.ReactNode;
  onClick?: () => void;
};
type PropsButton = {
  name: string;
};

const HeaderWrapper = ({ bg, fixed, children, ...restProps }: Props) => {
  return (
    <Header {...restProps} bg={bg} fixed={fixed}>
      {children}
    </Header>
  );
};
HeaderWrapper.Item = ({ children, ...restProps }: any) => {
  return <ListItem {...restProps}>{children}</ListItem>;
};
HeaderWrapper.Container = ({ children, ...restProps }: PropsConta) => {
  return <Container {...restProps}>{children}</Container>;
};
HeaderWrapper.Button = ({ children, ...restProps }: PropsConta) => {
  return <Button {...restProps}>{children}</Button>;
};

HeaderWrapper.Icon = ({ name, ...restProps }: PropsButton) => {
  return <Icon className={name} {...restProps} />;
};

HeaderWrapper.Anchor = function HeaderWrapperAnchor({
  children,
  bg,
  fixed,
  ...restProps
}: any) {
  return (
    <ListAnchor bg={bg} fixed={fixed} {...restProps}>
      {children}
    </ListAnchor>
  );
};
HeaderWrapper.Title = function HeaderWrapperTitle({
  children,
  bg,
  ...restProps
}: any) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};
HeaderWrapper.List = ({ children, side, ...restProps }: any) => {
  return (
    <ListLinks side={side} {...restProps}>
      {children}
    </ListLinks>
  );
};

HeaderWrapper.Link = function HeaderWrapperLink({
  children,
  bg,
  fixed,
  ...restProps
}: any) {
  return (
    <TitleLink {...restProps} bg={bg} fixed={fixed}>
      {children}
    </TitleLink>
  );
};
HeaderWrapper.LinksContainer = ({ children, ...restProps }: PropsConta) => {
  return <HeaderLinks {...restProps}>{children}</HeaderLinks>;
};
export default HeaderWrapper;
