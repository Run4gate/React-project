import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  type User,
  loadUsersFromLocalStorage,
  loadLoginUser,
  saveLoginUserToLocalStorage,
  saveUsersToLocalStorage,
  removeItemFromLocalStorage,
} from "../utils/localStorageFunc";

const storedUser = loadLoginUser();

type AuthState = {
  isAuth: boolean;
  users: User[];
  loginUser: User | null;
  error: string;
};

const initialState: AuthState = {
  isAuth: !!storedUser,
  users: loadUsersFromLocalStorage(),
  loginUser: storedUser,
  error: "",
};

export const {reducer: authReducer, actions: authActions} = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      const existingUser = state.users.find(
        (user) => user.username === action.payload.username
      );

      if (existingUser) {
        state.error = "User with the same name already exists";
      } else {
        state.users.push(action.payload);
        saveUsersToLocalStorage(state.users);

        state.loginUser = action.payload;
        saveLoginUserToLocalStorage(action.payload);
        state.isAuth = true;
        state.error = "";
      }
    },
    loginUser: (state, action: PayloadAction<User>) => {
      const foundUser = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );

      if (foundUser) {
        state.loginUser = foundUser;
        saveLoginUserToLocalStorage(foundUser);
        state.isAuth = true;
        state.error = "";
      } else {
        state.error = "Incorrect login or password";
      }
    },
    logout: (state) => {
      removeItemFromLocalStorage("loginUser");
      state.loginUser = null;
      state.isAuth = false;
    },
    removeError: (state) => {
      state.error = ''
    }
  },
});

export const { registerUser, loginUser, logout, removeError } = authActions;
