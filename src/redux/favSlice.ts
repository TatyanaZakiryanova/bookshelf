import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type FavItem = {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
  publisher: string;
  publishedDate: string;
  amount: string;
  count: number;
};

export type FavSlice = {
  items: FavItem[];
  Total: number;
};

const initialState: FavSlice = {
  items: [],
  Total: 0,
};

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
    },

    removeItem: (state, action: PayloadAction<FavItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    minusNumber: (state, action: PayloadAction<FavItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
    },
  },
});

export const { addItem, removeItem, minusNumber } = favSlice.actions;
export default favSlice.reducer;
