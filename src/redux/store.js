import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksReducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
