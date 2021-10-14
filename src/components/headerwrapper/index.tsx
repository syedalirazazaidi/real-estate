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
} from "./styles/headerwrapper";
type Props = {
  bg: string;
  fixed: boolean;
  children?: React.ReactNode;
  to?: string;
};
type PropsConta = {
  children?: React.ReactNode;
};
type Links = {
  children?: React.ReactNode;
  side: string;
  links: string;
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

HeaderWrapper.Container = ({ children, ...restProps }: any) => {
  return <Container {...restProps}>{children}</Container>;
};
HeaderWrapper.Anchor = function HeaderWrapperAnchor({
  children,
  bg,
  fixed,
  ...restProps
}: Props) {
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
