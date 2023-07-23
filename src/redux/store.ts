import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../config";
import { quizzesReducer } from "./features/quizzes/quizzesSlice";
import { answersReducer } from "./features/answers/answerSlice";
import { timerReducer } from "./features/timer/timerSlice";
import { authReducer } from "./features/auth/authSlice";
import { authApi } from "./features/auth/auth";

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    answers: answersReducer,
    timer: timerReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
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
