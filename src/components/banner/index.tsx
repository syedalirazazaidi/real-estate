import React from "react";
// import Main from "../banner";
import styled from "styled-components";
import Main from "./baner";

interface bannerProp {
  bg: string;
  source: string;
  children: React.ReactNode;
}

const Banner = ({ bg, source, children }: bannerProp) => {
  return (
    <Main bg={bg} source={source}>
      {children}
    </Main>
  );
};

export default Banner;
