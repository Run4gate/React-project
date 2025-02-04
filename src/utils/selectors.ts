import { RootState } from "../store/store";

export const error = (state: RootState) => state.auth.error

export const isAuth = (state: RootState) => state.auth.isAuth

export const loginUser = (state: RootState) => state.auth.loginUser

export const users = (state: RootState) => state.auth.users

export const searchConfig = (state: RootState) => state.search.searchConfig

export const searchError = (state: RootState) => state.search.searchError

export const searchResults = (state: RootState) => state.search.searchResults

export const history = (state: RootState) => state.search.history