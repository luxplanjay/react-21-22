import { createAsyncThunk } from '@reduxjs/toolkit';
import { schema, normalize } from 'normalizr';
import * as bookShelfAPI from 'services/bookshelf-api';

const authorEntity = new schema.Entity('authors');
const bookEntity = new schema.Entity('books', {
  author: authorEntity,
});
// const bookListEntity = new schema.Array(bookEntity);

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

export const fetchBooksByAuthor = createAsyncThunk(
  'books/fetchBooksByAuthor',
  async authorId => {
    const books = await bookShelfAPI.fetchBooksByAuthor(authorId);
    return books;
  },
);

export const fetchBookById = createAsyncThunk(
  'books/fetchBookById',
  async bookId => {
    const book = await bookShelfAPI.fetchBookById(bookId);
    const entities = normalize(book, bookEntity).entities;
    return entities;
  },
);
