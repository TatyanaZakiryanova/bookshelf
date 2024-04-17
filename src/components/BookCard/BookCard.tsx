import { MouseEventHandler } from 'react';
import { Book } from '../Main/Main';
import styles from './Overlay.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { FavItem, addItem } from '../../redux/favSlice';
import { MdFavorite } from 'react-icons/md';

const BookCard = ({
  show,
  item,
  onClose,
}: {
  show: Boolean;
  item: Book;
  onClose: MouseEventHandler;
}) => {
  const dispatch = useAppDispatch();

  const addToFavorites = () => {
    const book: FavItem = {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      thumbnail: item.volumeInfo.imageLinks.thumbnail,
      publisher: item.volumeInfo.publisher,
      publishedDate: item.volumeInfo.publishedDate,
      previewLink: item.volumeInfo.previewLink,
      amount: item.saleInfo.listPrice.amount,
      count: 0,
    };
    dispatch(addItem(book));
  };

  const findAddedBook = (id: string) =>
    useAppSelector((state) => state.favReducer.items.find((item) => item.id === id));
  const addedBook = findAddedBook(item.id);
  const addedValue = addedBook ? `In favorites: ${addedBook.count}` : 'Add to favorites';

  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <button className={styles.close} onClick={onClose}>
            X
          </button>
          <div className={styles.inform}>
            <img src={thumbnail} />
            <div className={styles.info}>
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink} target="_blank">
                <button>Go to book page</button>
              </a>
              <br />
              <button onClick={addToFavorites} className={styles.added}>
                <MdFavorite />
                {addedValue}
              </button>
              <br />
            </div>
          </div>
          <h4>{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default BookCard;
