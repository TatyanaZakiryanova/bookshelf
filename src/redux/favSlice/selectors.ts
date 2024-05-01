import { RootState, useAppSelector } from '../store';

export const favItemsSelector = (state: RootState) => state.favReducer.items;
export const favTotalSelector = (state: RootState) => state.favReducer.total;
export const findAddedBook = (id: string) =>
  useAppSelector((state) => state.favReducer.items.find((item) => item.id === id));
