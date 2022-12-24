import React, { FC } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: purple;
  text-transform: uppercase;
  font-size: 30px;
`;

const Home: FC = () => {
  return (
    <div>
      <Title>Title</Title>
    </div>
  );
};

export default Home;
