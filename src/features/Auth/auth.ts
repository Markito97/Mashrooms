import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:2995",
  }),
  endpoints: (build) => ({}),
});
export const {} = authApi;
