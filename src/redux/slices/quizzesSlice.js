import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuizes(state, action) {
      console.log('state =>>', state);
      console.log('action =>>', action);
      state.quizzes[action.payload[0].category] = [...action.payload];
    },
  },
});
export const { addQuizes } = quizzesSlice.actions;

export default quizzesSlice.reducer;
