import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IGame, IGamesList } from "../../models/data";

export interface IDataState {
  gamesList: any;
  totalGamesAmount: Number;
}

export interface IAction {
  type: string;
  payload?: any;
  meta?: {
    arg: any;
    requestId: string;
    requestStatus: string;
  };
}

const initialState: IDataState = {
  gamesList: null,
  totalGamesAmount: 0,
};

export const fetchGames = createAsyncThunk<IGamesList[]>(
  "games",
  async (games) => {
    const url =
      "https://api.rawg.io/api/platforms?key=cf6689bae468409f9286602ad7515cc2";
    const response = await fetch(url, {
      method: "GET",
      body: JSON.stringify(games),
    });

    const result = await response.json();
    return result.results;
  }
);

export const gamesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchGames.fulfilled, (state, action: IAction) => {
      const totalGames: number = action.payload.reduce(
        (prev: any, cur: any) => {
          return prev + cur.games_count;
        },
        0
      );
      console.log(totalGames);

      return {
        ...state,
        gamesList: action.payload,
        totalGamesAmount: totalGames,
      };
    });
  },
});

export const { increment } = gamesSlice.actions;

export default gamesSlice.reducer;
