import React, { useState } from "react";
import Banner from "../components/banner";
import links from "../components/constants/routes/nav-link";
import HeaderWrapper from "../components/headerwrapper";
import { Container } from "../components/headerwrapper/styles/headerwrapper";
interface headerTyep {
  bg: string;
  source: string;
  children?: React.ReactNode | any;
}
const HeaderContainer = ({ bg, source, children }: headerTyep) => {
  const [fixed, setFixed] = useState<boolean>(false);
  return (
    <Banner bg={bg} source={source}>
      <HeaderWrapper bg={bg} fixed={fixed}>
        <HeaderWrapper.Container>
          <HeaderWrapper.Title bg={bg}>
            <HeaderWrapper.Link bg={bg} fixed={fixed} to="/">
              Real Home
            </HeaderWrapper.Link>
          </HeaderWrapper.Title>
        </HeaderWrapper.Container>
        <HeaderWrapper.LinksContainer>
          <HeaderWrapper.List links="links">
            {links.map((link) => (
              <HeaderWrapper.Item key={link.to}>
                <HeaderWrapper.Anchor bg={bg} fixed={fixed} to={`${link.to}`}>
                  {link.name}
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            ))}
          </HeaderWrapper.List>
        </HeaderWrapper.LinksContainer>
      </HeaderWrapper>
    </Banner>
  );
};

export default HeaderContainer;
