import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchAuthors } from './authorsOperations';
import { fetchBookById } from '../books/booksOperations';

const authorsAdapter = createEntityAdapter({
  selectId: author => author.id,
});

const authorsSlice = createSlice({
  name: 'authors',
  initialState: authorsAdapter.getInitialState({
    loading: false,
  }),
  extraReducers: {
    [fetchAuthors.fulfilled](state, action) {
      authorsAdapter.setAll(state, action.payload);
    },
    [fetchBookById.fulfilled](state, action) {
      authorsAdapter.upsertMany(state, action.payload.authors);
    },
  },
});

export const authorsSelectors = authorsAdapter.getSelectors(
  state => state.authors,
);

export const authorsReducer = authorsSlice.reducer;
