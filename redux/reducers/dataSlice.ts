import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPlatformsList } from "../../models/platforms";
import { IGame } from "../../models/games";

const key = "key=cf6689bae468409f9286602ad7515cc2";

export interface IDataState {
  platforms: IPlatformsList[] | null;
  totalGamesAmount: Number;
  games: IGame[];
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
  games: [],
};

export const fetchPlatforms = createAsyncThunk<IPlatformsList[]>(
  "platforms",
  async (platforms) => {
    const url = `https://api.rawg.io/api/platforms?${key}`;
    const response = await fetch(url, {
      method: "GET",
      body: JSON.stringify(platforms),
    });

    const result = await response.json();
    return result.results;
  }
);

export const fetchGames = createAsyncThunk<Array<IGame>, number>(
  "games",
  async (currentPage: number) => {
    const url = `https://api.rawg.io/api/games?${key}&page=${currentPage}`;
    const response = await fetch(url, {
      method: "GET",
    });

    const result = await response.json();
    return result;
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
        return {
          ...state,
          platforms: action.payload,
        };
      })
      .addCase(fetchGames.fulfilled, (state, action: IAction) => {
        const { count, results } = action.payload;

        return {
          ...state,
          games: results,
          totalGamesAmount: count,
        };
      });
  },
});

export const { increment } = dataSlice.actions;

export default dataSlice.reducer;
