import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books/booksSlice';
import { authorsReducer } from './authors/authorsSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    authors: authorsReducer,
  },
});
