import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { CoreApi } from "./api/baseApi";

export const store = configureStore({
    reducer: {
        [CoreApi.reducerPath]: CoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CoreApi.middleware),
})