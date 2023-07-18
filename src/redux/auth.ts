import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    credentials: "include",
    baseUrl: "http://localhost:2995",
  }),
  endpoints: (builder) => ({
    handleSession: builder.query<any, void>({
      query: () => "auth/refresh",
    }),

    logout: builder.query({
      query: () => "auth/logout",
    }),
  }),
});
export const { useHandleSessionQuery, useLazyLogoutQuery } = authApi;
