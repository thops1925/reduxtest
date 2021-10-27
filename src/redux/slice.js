import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAPI = createAsyncThunk('post/getAPI', async () => {
  const response = await axios.get('http://localhost:4000/posts');
  return response?.data;
});

export const postAPI = createAsyncThunk('post/postAPI', async (payload) => {
  const response = await axios.post('http://localhost:4000/posts', {
    creator: payload.creator,
    title: payload.title,
    message: payload.message,
    tags: payload.tags,
    selectedFile: payload.selectedFile,
  });
  return response?.data;
});

export const deleteAPI = createAsyncThunk('post/deleteAPI', async (payload) => {
  const response = await axios.delete(
    `http://localhost:4000/posts/${payload.id}`,
  );
  return response?.data;
});

const post = createSlice({
  name: 'post',
  initialState: [],
  reduces: {},
  extraReducers: {
    [getAPI.fulfilled]: (state, action) => {
      return action.payload;
    },
    [postAPI.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [deleteAPI.fulfilled]: (state, action) => {
      return state.filter((post) => post.id !== action.payload.id);
    },
  },
});

export default post.reducer;
