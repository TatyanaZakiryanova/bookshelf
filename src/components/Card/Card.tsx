import { useMemo, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './Card.module.scss';
import { Book } from '../../pages/Main/types';
import { MdOutlineFavorite } from 'react-icons/md';
import useFavorites from '../hooks/useFavorites';

export type AddToFavoritesFunction = (item: Book) => void;

const Card = ({ book }: { book: Book[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [bookItem, setBookItem] = useState<Book>(book[0]);
  const { addToFavorites } = useFavorites();

  const memoizedThumbnails = useMemo(() => {
    return book.map((item) => item.volumeInfo.imageLinks?.smallThumbnail);
  }, [book]);

  return (
    <>
      {book.map((item: Book, index: number) => {
        let thumbnail = memoizedThumbnails[index];
        let amount = item.saleInfo?.listPrice?.amount;
        let author = item.volumeInfo?.authors;

        if (thumbnail) {
          return (
            <div key={item.id}>
              <div className={styles.card}>
                <img
                  src={thumbnail}
                  onClick={() => {
                    setShow(true);
                    setBookItem(item);
                  }}
                />{' '}
                <div className={styles.inform}>
                  <MdOutlineFavorite
                    className={styles.addtofav}
                    onClick={() => addToFavorites(item)}
                  />
                  <h3 className={styles.title}>{item.volumeInfo.title}</h3>
                  <h4 className={styles.author}>{author}</h4>
                  <h4 className={styles.amount}>{amount || '0'} &#8381;</h4>
                </div>
              </div>
              <BookCard show={show} item={bookItem} onClose={() => setShow(false)} />
            </div>
          );
        }
      })}
    </>
  );
};

export default Card;
