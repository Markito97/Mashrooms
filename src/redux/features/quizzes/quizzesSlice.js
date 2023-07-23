import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadQuiz = createAsyncThunk(
  "@@quizzes/load-quiz",
  async (name, { extra: { client, api } }) => {
    return client.get(api.BASE_URL + `?query=${name}`);
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};
const quizzesSlice = createSlice({
  name: "@@quizzes",
  initialState: initialState,
  reducers: {
    resetToDefault: (state, action) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadQuiz.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadQuiz.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action;
      })
      .addCase(loadQuiz.fulfilled, (state, action) => {
        state.status = "recieved";
        state.list = action.payload.data;
      });
  },
});

export const quizzesReducer = quizzesSlice.reducer;
export const { resetToDefault } = quizzesSlice.actions;

export const selectQuizzesInfo = (state) => ({
  status: state.quizzes.status,
  error: state.quizzes.error,
  qty: state.quizzes.list.length,
});

export const selectAllQuizzes = (state) => state.quizzes.list;
