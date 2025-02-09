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
          <h3>{authors}</h3>
          <h4>
            {publisher} <span>{publishedDate}</span>
          </h4>
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
              addedValue.includes('In favorites') ? styles.favoriteAdded : styles.addToFavorite
            }
          >
            {addedValue}
          </Button>
        </div>
      </div>
      <h4>{description}</h4>
    </>
  );
};

export default BookInfo;
