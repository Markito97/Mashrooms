import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth";
const initialState = {
  user: null,
};
const authSlice = createSlice({
  name: "@@auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.handleSession.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.user = null;
    });
  },
});

export const authReducer = authSlice.reducer;
