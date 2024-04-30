import { MouseEventHandler } from 'react';
import styles from './Overlay.module.scss';
import { useAppSelector } from '../../redux/store';
import { MdFavorite } from 'react-icons/md';
import { Book } from '../../pages/Main/types';
import { AddToFavoritesFunction } from '../Card/Card';

const BookCard = ({
  show,
  item,
  onClose,
  addToFavorites,
}: {
  show: Boolean;
  item: Book;
  onClose: MouseEventHandler;
  addToFavorites: AddToFavoritesFunction;
}) => {
  const findAddedBook = (id: string) =>
    useAppSelector((state) => state.favReducer.items.find((item) => item.id === id));
  const addedBook = findAddedBook(item.id);
  const addedValue = addedBook ? `In favorites: ${addedBook.count}` : 'Add to favorites';

  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;

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
                <button className={styles.page}>Go to book page</button>
              </a>
              <br />
              <button onClick={() => addToFavorites(item)} className={styles.added}>
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
