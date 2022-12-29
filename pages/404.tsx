import React from "react";
import styled from "styled-components";
import Image from "next/image";
import blErrorImage from "../public/images/404/bloodline.jpg";
import bgLandscape from "../public/images/404/landscape.jpg";
import Link from "next/link";

const Page = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
  margin-top: 10%;
  margin-left: 15%;
  position: absolute;
  width: 305px;
  z-index: 3;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 192px;
  font-weight: 500;
  line-height: 1;
`;

const Addition = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 20px;
  font-weight: 500;
`;

const Button = styled.button`
  width: 100%;
  height: 100px;
  height: 50px;
  padding: 0 20px;
  font-size: 18px;
  margin-top: 50px;
  border: none;
  color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 20px 0 hsl(0deg 0% 100% / 20%);
  background-color: ${({ theme }) => theme.white};
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  :hover {
    cursor: pointer;
    background-color: #ccc;
    box-shadow: 0 0 20px 0 hsl(0deg 0% 100% / 10%);
  }
`;

const ArtWrapper = styled.div`
  /* z-index: 1;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.7),
    rgb(21, 21, 21)
  ); */
  position: fixed;
  background-color: black;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const RadialGradient = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.primary},
    rgba(0, 0, 0, 0.7)
  );
`;

const NotFound = () => {
  return (
    <Page>
      <Wrapper>
        <Title>404</Title>
        <Addition>
          Whoops!
          <br />
          We couldn't find that page
        </Addition>

        <Link href="/" draggable={false}>
          <Button>Main page</Button>
        </Link>
      </Wrapper>
      <ArtWrapper>
        <RadialGradient />
        <Image
          src={bgLandscape}
          alt="Error image"
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          quality={100}
          draggable={false}
        />
      </ArtWrapper>
    </Page>
  );
};

export default NotFound;

// background:
// "linear-gradient(to left, rgba(0, 0, 0, 0.7), rgb(21, 21, 21))",
