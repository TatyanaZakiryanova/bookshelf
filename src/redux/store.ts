import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import favReducer from './favSlice/favSlice';
import booksReducer from './booksSlice/booksSlice';
import searchReducer from './searchSlice/searchSlice';

export const store = configureStore({
  reducer: {
    favReducer,
    booksReducer,
    searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
