import { FavItem } from '../../redux/favSlice';

export const calcTotal = (items: FavItem[]) => {
  return items.reduce((sum, item) => Number(item.amount) * item.count + sum, 0);
};
