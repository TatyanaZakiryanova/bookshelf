import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from '../../pages/Main/types';
import axios from 'axios';
import { SearchParams } from './types';

export const fetchBooks = createAsyncThunk<Book[], SearchParams>(
  'books/fetchBooks',
  async (params, { rejectWithValue }) => {
    const { search, orderBy, filter } = params;
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCeC6XVMuZOAY3TjODjgT7R5Joc4qHcjEE&orderBy=${orderBy}&filter=${filter}&maxResults=40`,
      );
      return response.data.items;
    } catch (error) {
      return rejectWithValue('Server error.');
    }
  },
);
