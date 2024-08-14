import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from '../../pages/Main/types';
import axios from 'axios';
import { SearchParams } from './types';

export const fetchBooks = createAsyncThunk<Book[], SearchParams>(
  'books/fetchBooks',
  async (params, { rejectWithValue }) => {
    const { search, orderBy, filter, startIndex, langRestrict } = params;
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCeC6XVMuZOAY3TjODjgT7R5Joc4qHcjEE&orderBy=${orderBy}&filter=${filter}&startIndex=${startIndex}&maxResults=40&langRestrict=${langRestrict}&projection=lite`,
      );

      const books: Book[] = response.data.items;

      if (!books) {
        return rejectWithValue('NO_MORE_BOOKS');
      }
      return books;
    } catch (error) {
      return rejectWithValue('Server error.');
    }
  },
);
