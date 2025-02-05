import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./authSlice"
import {searchReducer} from "./searchSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        search: searchReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch