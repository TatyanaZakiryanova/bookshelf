import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { calcTotal } from '../components/utils/Sum';
import { GetFavoritesList } from '../components/utils/Favorites';

export type FavItem = {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
  publisher: string;
  publishedDate: string;
  previewLink: string;
  amount: string;
  count: number;
};

export type FavSlice = {
  items: FavItem[];
  total: number;
};

const initialState: FavSlice = GetFavoritesList();

const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<FavItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.total = calcTotal(state.items);
    },

    removeItem: (state, action: PayloadAction<FavItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.total = calcTotal(state.items);
    },

    minusNumber: (state, action: PayloadAction<FavItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      state.total = calcTotal(state.items);
    },
  },
});

export const { addItem, removeItem, minusNumber } = favSlice.actions;
export default favSlice.reducer;
