import { createSlice } from "@reduxjs/toolkit";

const cache = createSlice({
  name: "cache",
  initialState: {
    cachedSuggestedMovies: {},
  },
  reducers: {
    addItemsInCache: (state, action) => {
      state.cachedSuggestedMovies = {
        ...state.cachedSuggestedMovies,
        ...action.payload,
      };
    },
  },
});

export const { addItemsInCache } = cache.actions;
export default cache.reducer;
