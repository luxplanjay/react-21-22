import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchAuthors } from './authorsOperations';

const entities = createReducer([], {
  [fetchAuthors.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchAuthors.pending]: () => true,
  [fetchAuthors.fulfilled]: () => false,
  [fetchAuthors.rejected]: () => false,
});

export default combineReducers({
  entities,
  isLoading,
});
