import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState = {
  timer: 0,
  stop: false,
};

const timerSlice = createSlice({
  name: "@@timer",
  initialState: initialState,
  reducers: {
    updateTimer: (state, action) => {
      state.timer = action.payload;
    },
    resetTimer: (state, action) => {
      state.timer = 0;
      state.stop = false;
    },
    stopTimer: (state, action) => {
      state.stop = true;
    },
  },
});

export const { updateTimer, resetTimer, stopTimer } = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
export const selectTimer = (state) => state.timer.timer;
export const selectStop = (state) => state.timer.stop;
