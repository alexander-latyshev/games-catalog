import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPlatformsList } from "../../models/platforms";
import { IGamesList } from "../../models/games";

export interface IDataState {
  platforms: IPlatformsList[] | null;
  totalGamesAmount: Number;
  games: any;
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
  platforms: null,
  totalGamesAmount: 0,
  games: null,
};

export const fetchPlatforms = createAsyncThunk<IPlatformsList[]>(
  "platforms",
  async (platforms) => {
    const url =
      "https://api.rawg.io/api/platforms?key=cf6689bae468409f9286602ad7515cc2";
    const response = await fetch(url, {
      method: "GET",
      body: JSON.stringify(platforms),
    });

    const result = await response.json();
    return result.results;
  }
);

export const fetchGames = createAsyncThunk<IGamesList>(
  "games",
  async (games) => {
    const url =
      "https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=cf6689bae468409f9286602ad7515cc2&page=1&platforms=18%2C1%2C7";
    const response = await fetch(url, {
      method: "GET",
      body: JSON.stringify(games),
    });

    const result = await response.json();
    return result.results;
  }
);

export const dataSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPlatforms.fulfilled, (state, action: IAction) => {
        const totalGames: number = action.payload.reduce(
          (prev: any, cur: any) => {
            return prev + cur.games_count;
          },
          0
        );
        return {
          ...state,
          platforms: action.payload,
          totalGamesAmount: totalGames,
        };
      })
      .addCase(fetchGames.fulfilled, (state, action: IAction) => {
        console.log(JSON.stringify(action.payload));

        return { ...state, games: action.payload };
      });
  },
});

export const { increment } = dataSlice.actions;

export default dataSlice.reducer;
