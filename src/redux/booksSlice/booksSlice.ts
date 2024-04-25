import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BooksState, Status } from './types';
import { Book } from '../../pages/Main/types';
import { fetchBooks } from './asyncActions';

const initialState: BooksState = {
  items: [],
  status: Status.NULL,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Book[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = booksSlice.actions;

export default booksSlice.reducer;
