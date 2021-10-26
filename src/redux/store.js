import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slice';
export const store = configureStore({
  reducer: {
    post: postSlice,
  },
});
