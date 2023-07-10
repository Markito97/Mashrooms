import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const answersSlice = createSlice({
  name: '@@answers',
  initialState: initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.list.push(action.payload);
    },
    resetToDefault: (state, action) => initialState,
  },
});

export const { addAnswer, resetToDefault } = answersSlice.actions;
export const answersReducer = answersSlice.reducer;
