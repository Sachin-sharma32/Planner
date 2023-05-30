import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  periodVisibility: false,
};

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setPeriodVisibility: (state, action) => {
      state.periodVisibility = action.payload;
    },
  },
});

export const { setPeriodVisibility } = baseSlice.actions;
export default baseSlice.reducer;
