import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: [],
  },
  reducers: {
    addQuizes(state, action) {
      state.quizzes = action.payload;
    },
  },
});
export const { addQuizes } = quizzesSlice.actions;

export default quizzesSlice.reducer;
