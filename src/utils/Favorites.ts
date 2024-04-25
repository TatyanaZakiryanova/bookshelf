import { FavItem } from '../redux/favSlice/types';
import { calcTotal } from './Sum';

export const GetFavoritesList = () => {
  const favorites = localStorage.getItem('favorites');
  const items = favorites ? JSON.parse(favorites) : [];
  const total = calcTotal(items);

  return {
    items: items as FavItem[],
    total,
  };
};
