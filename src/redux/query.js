import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const postAPI = createApi({
  reducerPath: 'quotes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => 'posts',
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: '/posts',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetAllPostQuery, useAddNewPostMutation } = postAPI;
