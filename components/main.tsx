import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IGamesList } from "../models/games";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchGames, fetchPlatforms } from "../redux/reducers/dataSlice";
import theme from "../styles/theme";
import Aside from "./aside";
import ProductCard from "./product/productCard";
import ProductList from "./product/productList";

const MainContainer = styled.main`
  display: flex;
  padding: 0 40px;
  min-height: 100vh;
  max-height: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.white};
`;

const Title = styled.h1`
  font-size: 72px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.white};
`;

const Main = () => {
  return (
    <MainContainer>
      <Aside />
      <Section>
        <Title>New and trending</Title>
        <Subtitle>Based on player counts and release date</Subtitle>
        <ProductList />
      </Section>
    </MainContainer>
  );
};

export default Main;
