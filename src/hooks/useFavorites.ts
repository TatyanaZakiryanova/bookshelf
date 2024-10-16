import { Book } from '../pages/Main/types';
import { addItem, removeItem } from '../redux/favSlice/favSlice';
import { FavItem } from '../redux/favSlice/types';
import { useAppDispatch } from '../redux/store';

type AddToFavoritesFunction = (item: Book) => void;

const useFavorites = () => {
  const dispatch = useAppDispatch();

  const addToFavorites: AddToFavoritesFunction = (item: Book) => {
    const amount = item.saleInfo?.listPrice?.amount || '0';
    const book: FavItem = {
      id: item.id,
      title: item.volumeInfo.title || 'Untitled',
      authors: item.volumeInfo.authors || 'Unknown author',
      thumbnail: item.volumeInfo.imageLinks.thumbnail,
      publisher: item.volumeInfo.publisher || 'Unknown publisher',
      publishedDate: item.volumeInfo.publishedDate || 'Unknown published date',
      previewLink: item.volumeInfo.previewLink,
      amount: amount,
      count: 0,
    };
    dispatch(addItem(book));
  };

  const removeFromFavorites = (id: string) => {
    dispatch(removeItem({ id } as FavItem));
  };

  return { addToFavorites, removeFromFavorites };
};

export default useFavorites;
