import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react/';

export const quizzesApi = createApi({
  reducerPath: 'quizzesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:2995/quizzes/',
  }),
  endpoints: (build) => ({
    getJSQuizzes: build.query({
      query: (query) => `/?query=${query}`,
    }),
  }),
});
export const { useGetJSQuizzesQuery } = quizzesApi;
