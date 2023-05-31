import { configureStore } from '@reduxjs/toolkit';
import { quizzesApi } from './quizzesApi';
import addQuizes from './slices/quizzesSlice';
export const store = configureStore({
  reducer: {
    [quizzesApi.reducerPath]: quizzesApi.reducer,
    quizzes: addQuizes,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizzesApi.middleware),
});
