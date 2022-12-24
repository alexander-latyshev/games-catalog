import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { BiSearch } from "react-icons/bi";

const HeaderContainer = styled.header`
  margin: 0;
  padding: 0;
  display: flex;
  padding: 24px 40px;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 900;
  line-height: 1;
  margin-right: 150px;
  letter-spacing: 5px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.lightGrey};
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  padding: 0 12px 0 38px;
  line-height: 14px;
  transition: color 0.3s, background-color 0.3s, opacity 0.3s,
    width 0.05s linear;
  height: 44px;
  border-radius: 24px;
  min-width: 700px;
  :hover {
    background-color: ${({ theme }) => theme.white};
  }
  :focus {
    background-color: ${({ theme }) => theme.white};
  }
`;

const Header = () => {
  const [hasHover, setHover] = useState(false);
  const [hasFocus, setFocus] = useState(false);

  return (
    <HeaderContainer>
      <Title>RAWG</Title>
      <BiSearch
        color={hasHover || hasFocus ? "black" : "grey"}
        style={{ position: "relative", left: 30 }}
      />
      <Input
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autoFocus
        type="text"
        placeholder={`Search ${1} games`}
      />
    </HeaderContainer>
  );
};

export default Header;
