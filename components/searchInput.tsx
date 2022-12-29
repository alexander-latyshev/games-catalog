import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

type Props = {};

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

const SearchInput = (props: Props) => {
  const dispatch = useAppDispatch();
  const [hasHover, setHover] = useState(false);
  const [hasFocus, setFocus] = useState(false);
  const totalGamesAmount = useAppSelector(
    (state) => state.data.totalGamesAmount
  );

  console.log("render");

  return (
    <>
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
        placeholder={`Search ${totalGamesAmount} games`}
      />
    </>
  );
};

export default SearchInput;
