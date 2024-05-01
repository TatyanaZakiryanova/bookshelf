import { useMemo, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './Card.module.scss';
import { Book } from '../../pages/Main/types';
import { MdOutlineFavorite } from 'react-icons/md';
import useFavorites from '../../hooks/useFavorites';
import { findAddedBook } from '../../redux/favSlice/selectors';
import FilteredBooksNF from '../FilteredBooksNF/FilteredBooksNF';

const Card = ({ book }: { book: Book[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [bookItem, setBookItem] = useState<Book | null>(null);
  const { addToFavorites } = useFavorites();

  const memoizedThumbnails = useMemo(() => {
    if (book && book.length > 0) {
      return book.map((item) => item.volumeInfo.imageLinks?.smallThumbnail);
    } else {
      return [];
    }
  }, [book]);

  const handleBookClick = (book: Book) => {
    setShow(true);
    setBookItem(book);
  };

  return (
    <>
      {book && book.length > 0 ? (
        book.map((item: Book, index: number) => {
          let thumbnail = memoizedThumbnails[index];
          let amount = item.saleInfo?.listPrice?.amount;
          let author = item.volumeInfo?.authors?.slice(0, 5).join(', ');
          const added = findAddedBook(item.id);

          if (thumbnail) {
            return (
              <div key={item.id}>
                <div className={styles.card}>
                  <img src={thumbnail} onClick={() => handleBookClick(item)} />{' '}
                  <div className={styles.inform}>
                    <MdOutlineFavorite
                      className={added ? styles.added : styles.addtofav}
                      onClick={() => addToFavorites(item)}
                    />
                    <h3 className={styles.title}>{item.volumeInfo.title}</h3>
                    <h4 className={styles.author}>{author}</h4>
                    <h4 className={styles.amount}>{amount || 'Free'}</h4>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <FilteredBooksNF />
      )}
      {bookItem && show && <BookCard item={bookItem} onClose={() => setShow(false)} />}
    </>
  );
};

export default Card;
