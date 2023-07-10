import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import { quizzesReducer } from './features/quizzes/quizzes-slice';
import { answersReducer } from './features/answers/answer-slice';
import { timerReducer } from './features/timer/timer-slice';
export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    answers: answersReducer,
    timer: timerReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      thunk: {
        extraArgument: {
          client: axios,
          api: api,
        },
      },
      serializableCheck: false,
    }),
});
