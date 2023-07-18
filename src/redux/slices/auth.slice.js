import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../auth";
const initialState = {
  user: null,
};
const authSlice = createSlice({
  name: "@@auth",
  initialState: initialState,
  reducers: {
    signin: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.handleSession.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state, {}) => {
      state.user = null;
    });
  },
});

export const { signin, signout } = authSlice.actions;
export const authReducer = authSlice.reducer;
