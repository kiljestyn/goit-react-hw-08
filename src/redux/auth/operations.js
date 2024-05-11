import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import {
  clearToken,
  requestGetCurrentUser,
  requestLogOut,
  requestSignIn,
  requestSignUp,
  setToken,
} from "../../services/api";
// import axios from "axios";

// export const instance = axios.create({
//   baseURL: "https://connections-api.herokuapp.com",
// });

// export const setToken = (token) => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const clearToken = () =>
//   (instance.defaults.headers.common.Authorization = "");

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData); // console.log("REGISTER data: ", data);

      return data;
    } catch (err) {
      // console.log("not valid email or password");
      toast.error("This email is already in use. Please log in.");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);
      return data;
    } catch (err) {
      toast.error("Please sign up");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await requestLogOut();
    clearToken();
    return;
  } catch (err) {
    toast.error("Try again later.");
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestGetCurrentUser();
      return data;
    } catch (err) {
      toast.error("Try again later.");
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);
