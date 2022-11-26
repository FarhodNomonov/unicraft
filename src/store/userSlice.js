import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  role: null,
  status: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersSuccess(state, action) {
      state.user = action.payload;
      state.role = action.payload.role;
      state.status = true;
    },
    getErrorUser(state, action) {
      state.user = {};
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { getUsersSuccess, getErrorUser } = userSlice.actions;

export default userSlice.reducer;
