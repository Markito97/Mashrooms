import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const answersSlice = createSlice({
  name: '@@answers',
  initialState: initialState,
  reducers: {
    addAnswer: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
    },
    resetToDefault: (state, action) => initialState,
  },
});

export const { addAnswer, resetToDefault } = answersSlice.actions;
export const answersReducer = answersSlice.reducer;
// const answers = {
// number: 1,
// question: 'Question Text',
// answers: [1, 2, 3, 4],
// correctAnswer: 'index from answers',
// descriptiom: 'пояснение к ответу',
//   };
