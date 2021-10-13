import React from "react";
import styled from "styled-components";
type Props = {
  bg: string;
  source?: string;
};
// children?: React.ReactNode;

const Main = styled.div<Props>`
  background-image: url(${({ source }) => source});
  background-size: cover;
  background-position: center;
  background-repeat: none;
  background-attachment: fixed;
`;

export default Main;
