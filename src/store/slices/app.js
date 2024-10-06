import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },

  reducers: {
    updateMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { updateMenuOpen, closeMenu } = app.actions;
export default app.reducer;
