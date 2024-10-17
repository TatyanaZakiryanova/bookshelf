import { useAppSelector } from '../redux/store';

export const useFindAddedBook = (id: string) => {
  return useAppSelector((state) => state.favorites.items.find((item) => item.id === id));
};
