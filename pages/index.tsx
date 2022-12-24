import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Home from "../components/screens/home/Home";
import { NextPage } from "next";

export const HomePage: NextPage = () => {
  return <Home />;
};

export default HomePage;
