import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true
    },

    reducers: {
        updateMenuOpen: (state, action) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const {updateMenuOpen} = app.actions;
export default app.reducer;