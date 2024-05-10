import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api";
// import axios from "axios";

// export const instance = axios.create({
//   baseURL: "https://connections-api.herokuapp.com",
// });

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () =>
  (instance.defaults.headers.common.Authorization = "");

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      // console.log("REGISTER data: ", data);
      setToken(data.token);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      setToken(token);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/users/logout");
      clearToken();
      return;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
