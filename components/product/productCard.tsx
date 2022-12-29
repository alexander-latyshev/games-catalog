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
  color: ${({ theme }) => theme.white};
  flex-direction: column;
  max-width: 270px;
  background-color: ${({ theme }) => theme.secondary};
  margin-top: 24px;
  display: flex;
  width: 100%;
  cursor: pointer;
  border-radius: 12px;
  transition: box-shadow 0.2s ease-in-out;
  -webkit-box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);
  :hover {
    box-shadow: 0 4px 20px ${({ theme }) => theme.hover};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px 16px 24px;
`;

const Title = styled.h3`
  width: 100%;
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

const Info = styled(Wrapper)`
  flex-direction: column;
  padding: 0;
`;

const Rating = styled.div`
  color: ${({ theme, color }) => {
    if (color === "green") return theme.lightGreen;
    if (color === "red") return theme.lightRed;
    return theme.lightOrange;
  }};
  border: 1px solid
    ${({ theme, color }) => {
      if (color === "green") return theme.darkGreen;
      if (color === "red") return theme.darkRed;
      return theme.darkOrange;
    }};
  margin-left: auto;
  padding: 2px 0;
  min-width: 32px;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 700;
  text-align: center;
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
          <span>{`Release date: ${props.released}`}</span>
        </Info>
        {props.metacritic && (
          <Rating
            color={
              props.metacritic > 80
                ? "green"
                : props.metacritic < 50
                ? "red"
                : "orange"
            }
          >
            {props.metacritic}
          </Rating>
        )}
      </Wrapper>
    </Card>
  );
};

export default ProductCard;
