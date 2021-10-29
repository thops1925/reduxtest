import { configureStore } from '@reduxjs/toolkit';
import { postAPI } from './query';
import postSlice from './slice';

export const store = configureStore({
  reducer: {
    post: postSlice,
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});
