import { MdFavorite } from 'react-icons/md';
import { Book } from '../../pages/Main/types';
import useFavorites from '../../hooks/useFavorites';
import { findAddedBook } from '../../redux/favSlice/selectors';
import styles from './BookCard.module.scss';

const BookCard = ({ item, onClose }: { item: Book; onClose: () => void }) => {
  const { addToFavorites } = useFavorites();

  const addedBook = findAddedBook(item.id);
  const addedValue = addedBook ? `In favorites: ${addedBook.count}` : 'Add to favorites';

  const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
  const title = item.volumeInfo.title || 'No title available';
  const authors = item.volumeInfo.authors?.join(', ') || 'Unknown author';
  const publisher = item.volumeInfo.publisher || 'Unknown publisher';
  const publishedDate = item.volumeInfo.publishedDate || 'Unknown date';
  const description = item.volumeInfo.description || 'No description available.';

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <button className={styles.close} onClick={onClose}>
            X
          </button>
          <div className={styles.inform}>
            <img src={thumbnail} alt={title} />
            <div className={styles.info}>
              <h1>{title}</h1>
              <h3>{authors}</h3>
              <h4>
                {publisher} <span>{publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
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
          <h4>{description}</h4>
        </div>
      </div>
    </>
  );
};

export default BookCard;
