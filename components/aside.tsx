import React from "react";
import styled from "styled-components";

const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 30px;
`;

const Aside = () => {
  return (
    <AsideContainer>
      <Title>Platforms</Title>
    </AsideContainer>
  );
};

export default Aside;
