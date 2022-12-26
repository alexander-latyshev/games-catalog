import React from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import ProductCard from "./productCard";

const LayoutGrid = styled.div`
  .my-masonry-grid {
    display: flex;
  }
  .my-masonry-grid_column:nth-child(2) {
    margin: 0 24px;
  }
`;

const ProductList = () => {
  const games = useAppSelector((state) => state.data.games);
  return (
    <LayoutGrid>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {games?.map((game: any, index: number) => {
          return (
            <ProductCard
              key={index}
              name={game.name}
              id={game.id}
              image={game.background_image}
            />
          );
        })}
      </Masonry>
    </LayoutGrid>
  );
};

export default ProductList;
