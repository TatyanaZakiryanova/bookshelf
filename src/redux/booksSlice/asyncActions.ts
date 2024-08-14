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
      const uniqueBooks: Book[] = books.reduce((accumulator: Book[], currentBook: Book) => {
        if (!accumulator.some((book) => book.id === currentBook.id)) {
          accumulator.push(currentBook);
        }
        return accumulator;
      }, []);
      return uniqueBooks;
    } catch (error) {
      return rejectWithValue('Server error.');
    }
  },
);
