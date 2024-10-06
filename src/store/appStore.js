import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/app";

const appStore = configureStore({
    reducer: {
        app: app
    }
})

export default appStore;