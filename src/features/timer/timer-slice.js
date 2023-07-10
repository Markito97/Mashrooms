import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
const initialState = {
  timer: 0,
  result: 0,
};

const timerSlice = createSlice({
  name: '@@timer',
  initialState: initialState,
  reducers: {
    updateTimer: (state, action) => {
      state.timer += 1;
    },
    resetTimer: (state, action) => {
      state.result = state.timer;
      state.timer = 0;
    },
  },
});

export const { updateTimer, resetTimer } = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
export const selectTimer = (state) => state.timer.result;
