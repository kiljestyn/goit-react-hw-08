import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITAL_STATE = {
  isSignedIn: false,
  userData: null,
  token: null,
  isLoading: false,
  isError: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload;
      })
      .addCase(logout.fulfilled, () => {
        return INITAL_STATE;
      });
  },

  // .addMatcher(
  //   isAnyOf(
  //     register.pending,
  //     login.pending,
  //     refreshUser.pending,
  //     logout.pending
  //   ),
  //   (state) => {
  //     state.isLoading = true;
  //     state.isError = false;
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(
  //     register.rejected,
  //     login.rejected,
  //     refreshUser.rejected,
  //     logout.rejected
  //   ),
  //   (state) => {
  //     state.isLoading = false;
  //     state.isError = true;
  //   }
  // ),
});

export const authReducer = authSlice.reducer;
