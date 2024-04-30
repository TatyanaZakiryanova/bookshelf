import { Book } from '../../pages/Main/types';
import { addItem } from '../../redux/favSlice/favSlice';
import { FavItem } from '../../redux/favSlice/types';
import { useAppDispatch } from '../../redux/store';
import { AddToFavoritesFunction } from '../Card/Card';

const useFavorites = () => {
  const dispatch = useAppDispatch();

  const addToFavorites: AddToFavoritesFunction = (item: Book) => {
    let amount = item.saleInfo?.listPrice?.amount || '0';
    const book: FavItem = {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      thumbnail: item.volumeInfo.imageLinks.thumbnail,
      publisher: item.volumeInfo.publisher,
      publishedDate: item.volumeInfo.publishedDate,
      previewLink: item.volumeInfo.previewLink,
      amount: amount,
      count: 0,
    };
    dispatch(addItem(book));
  };

  return { addToFavorites };
};

export default useFavorites;
