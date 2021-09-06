import { createSlice } from "@reduxjs/toolkit";

const activeUserSlice = createSlice({
  name: "activeUser",
  initialState: { value: null },
  reducers: {
    logout(state) {
      state.value = null;
    },
    login(state, action) {
        console.log(action)
      state.value = action.payload;
    },
  },
});

console.log("akcije", activeUserSlice.actions);
console.log("reducer", activeUserSlice.reducer);

export const { login, logout } = activeUserSlice.actions;
export default activeUserSlice.reducer;
