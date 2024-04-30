import { useAppSelector } from '../store';

export const findAddedBook = (id: string) =>
  useAppSelector((state) => state.favReducer.items.find((item) => item.id === id));
