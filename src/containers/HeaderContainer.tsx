import React, { useState } from "react";
import Banner from "../components/banner";
interface headerTyep {
  bg: string;
  source: string;
}
const HeaderContainer = ({ bg, source }: headerTyep) => {
  return <Banner bg={bg} source={source} />;
};

export default HeaderContainer;
