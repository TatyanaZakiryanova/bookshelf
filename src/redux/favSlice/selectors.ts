import { RootState } from '../store';

export const favItemsSelector = (state: RootState) => state.favorites.items;
export const favTotalSelector = (state: RootState) => state.favorites.total;
