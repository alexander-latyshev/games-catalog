import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Home from "../components/screens/home/Home";

const Title = styled.h1`
  color: purple;
  text-transform: uppercase;
  font-size: 30px;
`;

export default function HomePage() {
  return <Home />;
}

// import { NextPage } from "next";

// export const HomePage: NextPage = () => {
//   return <Home />;
// };
