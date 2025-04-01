import { Book } from '../../pages/Main/types';
import Button from '../UI/Button/Button';
import styles from './BookInfo.module.scss';

interface IBookInfoProps {
  title: string;
  authors: string;
  publisher: string;
  publishedDate: string;
  description: string;
  thumbnail: string;
  item: Book;
  addedValue: string;
  addToFavorites: (item: Book) => void;
  showPreview: () => void;
}

const BookInfo = ({
  title,
  authors,
  publisher,
  publishedDate,
  description,
  thumbnail,
  item,
  addedValue,
  addToFavorites,
  showPreview,
}: IBookInfoProps) => {
  return (
    <>
      <div className={styles.bookInform}>
        <img src={thumbnail} alt={title} />
        <div className={styles.inform}>
          <h1 className={styles.title}>{title}</h1>
          <p>{authors}</p>
          <p>
            {publisher} {publishedDate}
          </p>
          <div className={styles.pageButtons}>
            <Button onClick={showPreview} className={styles.pageButton}>
              Превью
            </Button>
            <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
              <Button className={styles.pageButton}>Сайт</Button>
            </a>
          </div>
          <Button
            onClick={() => addToFavorites(item)}
            className={
              addedValue.includes('В избранном') ? styles.favoriteAdded : styles.addToFavorite
            }
          >
            {addedValue}
          </Button>
        </div>
      </div>
      <p>{description}</p>
    </>
  );
};

export default BookInfo;
