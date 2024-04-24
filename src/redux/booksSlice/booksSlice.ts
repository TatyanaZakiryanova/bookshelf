import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BooksState, Status } from './types';
import { Book } from '../../components/Main/types';
import axios from 'axios';

export const fetchBooks = createAsyncThunk<Book[], string>('books/fetchBooks', async (search) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=' +
        search +
        '&key=AIzaSyCeC6XVMuZOAY3TjODjgT7R5Joc4qHcjEE' +
        '&maxResults=40',
    );
    return response.data.items;
  } catch (error) {
    alert('Data not found');
  }
});

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
