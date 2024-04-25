import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from '../../pages/Main/types';
import axios from 'axios';

export const fetchBooks = createAsyncThunk<Book[], string>(
  'books/fetchBooks',
  async (search, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCeC6XVMuZOAY3TjODjgT7R5Joc4qHcjEE&maxResults=40`,
      );
      return response.data.items;
    } catch (error) {
      return rejectWithValue('Server error.');
    }
  },
);
