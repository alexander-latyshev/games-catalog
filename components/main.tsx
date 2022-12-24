import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const MainContainer = styled.main`
  display: flex;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.darkGrey};
  font-size: 30px;
`;

const Main = () => {
  return (
    <MainContainer>
      <Title>Main</Title>
    </MainContainer>
  );
};

export default Main;
