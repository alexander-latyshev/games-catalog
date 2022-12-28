import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import { IGame } from "../../models/games";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGames, fetchPlatforms } from "../../redux/reducers/dataSlice";
import ProductCard from "./productCard";

const LayoutGrid = styled.div`
  .my-masonry-grid {
    display: flex;
    width: 858px;
  }
  .my-masonry-grid_column:nth-child(2) {
    margin: 0 24px;
  }
`;

const ProductList = () => {
  const games: IGame[] = useAppSelector((state) => state.data.games);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([] as IGame[]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (items?.length === 0) setItems(games);
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [games]);

  const scrollHandler = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    console.log(scrollHeight - (scrollTop + window.innerHeight));
    if (scrollHeight - (scrollTop + window.innerHeight) < 700) {
      setFetching(true);
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (fetching) {
      dispatch(fetchGames(currentPage));
      setItems([...items, ...games]);
      setFetching(false);
    }
  }, [fetching]);

  return (
    <LayoutGrid>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items?.map((game: IGame, index: number) => {
          return (
            <ProductCard
              key={index}
              name={game.name}
              id={game.id}
              image={game.background_image}
              platforms={game.platforms}
              released={game.released}
              metacritic={game.metacritic}
              rating={game.rating}
            />
          );
        })}
      </Masonry>
    </LayoutGrid>
  );
};

export default ProductList;
