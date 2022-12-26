import React from "react";
import styled from "styled-components";
import { IPlatform } from "../../models/platforms";
import PlatformButton from "./platformButton";

type Props = {
  id: number;
  name: string;
  image: string;
  platforms: IPlatform[];
};

const Card = styled.div`
  color: ${({ theme }) => theme.secondary};
  padding: 16px 16px 24px;
  flex-direction: column;
  margin-top: 24px;
  display: flex;
  width: 100%;
  cursor: pointer;
  background-color: #202020;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.white};
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
  margin-top: 10px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-bottom: 10px;
`;

const ProductCard = (props: Props) => {
  console.log(props.platforms);

  return (
    <Card>
      <Icon src={props.image} />
      <Wrapper style={{ display: "flex" }}>
        {props.platforms?.map((item: any) => {
          return <PlatformButton name={item.platform.name} />;
        })}
      </Wrapper>
      <Title>{props.name}</Title>
    </Card>
  );
};

export default ProductCard;
