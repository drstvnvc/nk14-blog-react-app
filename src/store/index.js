import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./activeUser/slice";

const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
  },
});

export default store;
