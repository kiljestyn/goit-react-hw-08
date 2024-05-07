import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;
// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;
