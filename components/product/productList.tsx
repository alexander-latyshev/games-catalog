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
  const [products, setProducts] = useState([] as Array<IGame>);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (products?.length === 0) setProducts(games);
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [games]);

  const scrollHandler = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (scrollHeight - (scrollTop + window.innerHeight) < 700) {
      setFetching(true);
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (fetching) {
      dispatch(fetchGames(currentPage));
      setProducts([...products, ...games]);
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
        {products?.map((p: IGame, idx: number) => {
          return (
            <ProductCard
              key={idx}
              name={p.name}
              id={p.id}
              image={p.background_image}
              platforms={p.platforms}
              released={p.released}
              metacritic={p.metacritic}
              rating={p.rating}
            />
          );
        })}
      </Masonry>
    </LayoutGrid>
  );
};

export default ProductList;
