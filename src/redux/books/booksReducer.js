import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';

const entities = createReducer([], {
  [fetchBooks.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchBooks.pending]: () => true,
  [fetchBooks.fulfilled]: () => false,
  [fetchBooks.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchBooks.rejected]: (_, action) => action.payload,
  [fetchBooks.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
