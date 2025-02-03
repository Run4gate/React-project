import { RootState } from "../store/store";

export const loginUser = (state: RootState) => state.auth.loginUser

export const isAuth = (state: RootState) => state.auth.isAuth

export const error = (state: RootState) => state.auth.error