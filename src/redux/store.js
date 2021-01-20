import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksReducer';
import authorsReducer from './authors/authorsReducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    authors: authorsReducer,
  },
});
