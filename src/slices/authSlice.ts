import { createSlice } from "@reduxjs/toolkit";

const storedUserInfo = localStorage.getItem('userInfo');
const initialState = {
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      console.log(action.payload)
     
    },
    clearUser: (state, action) => {
      state.userInfo = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
