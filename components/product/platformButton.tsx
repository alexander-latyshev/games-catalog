import React from "react";
import styled from "styled-components";

type Props = {
  name: string;
};

const TextBox = styled.span`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.silver};
  font-size: 12px;
  margin: 2px;
  padding: 5px;
`;

const PlatformButton = (props: Props) => {
  return (
    <>
      <TextBox>{props?.name}</TextBox>
    </>
  );
};

export default PlatformButton;
