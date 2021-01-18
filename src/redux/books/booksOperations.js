import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookShelfAPI from 'services/bookshelf-api';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfAPI.fetchBooks();
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest());

//   try {
//     const books = await bookShelfAPI.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };
