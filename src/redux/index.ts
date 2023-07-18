import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../config";
import { quizzesReducer } from "../features/quizzes/quizzes-slice";
import { answersReducer } from "../features/answers/answer-slice";
import { timerReducer } from "../features/timer/timer-slice";
import { authApi } from "./auth";

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    answers: answersReducer,
    timer: timerReducer,
    [authApi.reducerPath]: authApi.reducer,
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
    }).concat(authApi.middleware),
});
