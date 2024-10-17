import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from '../../pages/Main/types';
import axios, { AxiosResponse } from 'axios';
import { ApiResponse, SearchParams } from './types';

export const fetchBooks = createAsyncThunk<Book[], SearchParams>(
  'books/fetchBooks',
  async (params, { rejectWithValue }) => {
    const { search, orderBy, filter, startIndex, langRestrict } = params;
    const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&orderBy=${orderBy}&filter=${filter}&startIndex=${startIndex}&maxResults=40&langRestrict=${langRestrict}&projection=lite`,
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
