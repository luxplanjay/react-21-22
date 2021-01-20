import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import {
  fetchBooks,
  fetchBooksByAuthor,
  fetchBookById,
} from './booksOperations';

const booksAdapter = createEntityAdapter({
  selectId: book => book.id,
});

const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState({
    loading: false,
    // sortOrder: 'ascending',
  }),
  extraReducers: {
    // [fetchBooks.pending](state) {
    //   state.loading = true;
    // },
    [fetchBooks.fulfilled](state, action) {
      booksAdapter.upsertMany(state, action.payload);
    },
    [fetchBooksByAuthor.fulfilled](state, action) {
      booksAdapter.upsertMany(state, action.payload);
    },
    [fetchBookById.fulfilled](state, action) {
      booksAdapter.upsertMany(state, action.payload.books);
    },
  },
});

const selectors = booksAdapter.getSelectors(state => state.books);
selectors.getBooksByAuthor = createSelector(
  [selectors.selectAll, (_, authorId) => authorId],
  (allBooks, authorId) => allBooks.filter(book => book.authorId === authorId),
);
// selectors.getSortedBooks = state => {
//   const order = state.books.sortOrder;
//   const books = selectors.selectAll(state);

//   return books.sort((a, b) => {
//     // сорт по ордеру как тебе надо
//     switch (order) {
//       case 'ascending':
//         return a.title.localeCompare(b.title);

//       case 'descending':
//         return b.title.localeCompare(a.title);

//       default:
//         return 0;
//     }
//   });
// };

export const booksSelectors = selectors;
export const booksReducer = booksSlice.reducer;
