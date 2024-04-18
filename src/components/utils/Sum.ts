import { FavItem } from '../../redux/favSlice/types';

export const calcTotal = (items: FavItem[]) => {
  const total = items.reduce((sum, item) => Number(item.amount) * item.count + sum, 0);
  return Number(total.toFixed(2));
};
