import { createSlice } from "@reduxjs/toolkit";
import {fetchGamesData} from "./thunks";
import toast from "react-hot-toast";
import { Games } from "@sharedUtils/types";


const initialState: Games = {
  typesGame: [],
  "min-cart-value": 0,
  isGameAtivate: 'Lotofácil'
};


const games = createSlice({
  name: "@games",
  initialState,
  reducers: {
    gameSelected(state, action){
      state.isGameAtivate = action.payload
      return state
    }
  },
  extraReducers: (builder) => {
      builder.addCase(fetchGamesData.fulfilled, (state, action) => {
        state.typesGame = action.payload.types
        state["min-cart-value"] = action.payload["min-cart-value"]
        return state;
      })
      builder.addCase(fetchGamesData.rejected, () => {
          toast.error('Ocorreu um problema 😔 \nRecarregue a página')
      })
  }
});

export const reducerGames = games.reducer
export const {gameSelected} = games.actions

