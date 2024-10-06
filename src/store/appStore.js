import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/app";
import cache from './slices/cache';

const appStore = configureStore({
    reducer: {
        app: app,
        cache: cache
    }
})

export default appStore;