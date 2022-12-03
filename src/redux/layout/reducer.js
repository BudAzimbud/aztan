import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    open: true,
  },
  reducers: {
    openSidebar: (state, action) => {},
  },
});

export const { openSidebar } = layoutSlice.actions;

export default layoutSlice.reducer;
