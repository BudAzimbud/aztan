import { configureStore } from "@reduxjs/toolkit";
import layout from "./layout/reducer";
export default configureStore({
  reducer: {
    layout: layout,
  },
});
