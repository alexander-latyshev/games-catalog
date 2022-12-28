import React from "react";
import styled from "styled-components";
import { Platform } from "../../models/games";

type Props = {
  id: number;
  name: string;
  image: string;
  platforms: Platform[];
  released: string;
  rating?: number | null;
  metacritic?: number;
};

const Card = styled.div`
  color: ${({ theme }) => theme.secondary};
  flex-direction: column;
  max-width: 270px;
  margin-top: 24px;
  display: flex;
  width: 100%;
  cursor: pointer;
  background-color: #202020;
  border-radius: 12px;
  transition: box-shadow 0.2s ease-in-out;
  -webkit-box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);
  :hover {
    box-shadow: 0 4px 20px hsl(210deg 5% 37% / 19%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px 16px 24px;
`;

const Title = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.white};
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  min-height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.white};
`;

const Info = styled(Wrapper)`
  flex-direction: column;
  padding: 0;
`;

const Rating = styled.div`
  color: ${({ theme }) => theme.lightGreen};
  border: 1px solid ${({ theme }) => theme.darkGreen};
  margin-left: auto;
  padding: 2px 0;
  min-width: 32px;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 700;
  text-align: center;
  border: 1px solid;
`;

const ProductCard = (props: Props) => {
  return (
    <Card>
      <Icon src={props.image} />
      <Wrapper style={{ display: "flex" }}>
        {/* {props.platforms?.map((item: IAvailablePlatforms, index: number) => {
          return <PlatformButton key={index} name={item.platform.name} />;
        })} */}
        <Title>{props.name}</Title>

        <Info>
          <Text>{`Release date: ${props.released}`}</Text>
        </Info>
        {props.metacritic && <Rating>{props.metacritic}</Rating>}
      </Wrapper>
    </Card>
  );
};

export default ProductCard;
