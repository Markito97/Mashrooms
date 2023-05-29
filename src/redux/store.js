import { configureStore } from '@reduxjs/toolkit';
import { quizzesApi } from './quizzesApi';

export const store = configureStore({
  reducer: {
    [quizzesApi.reducerPath]: quizzesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizzesApi.middleware),
});
