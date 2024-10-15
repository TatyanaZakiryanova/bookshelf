import { RootState, useAppSelector } from '../store';

export const favItemsSelector = (state: RootState) => state.favorites.items;
export const favTotalSelector = (state: RootState) => state.favorites.total;
export const findAddedBook = (id: string) =>
  useAppSelector((state) => state.favorites.items.find((item) => item.id === id));
