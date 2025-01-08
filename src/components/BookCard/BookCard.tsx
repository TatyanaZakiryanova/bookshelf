import { MdOutlineFavorite } from 'react-icons/md';

import { Book } from '../../pages/Main/types';
import styles from './BookCard.module.scss';

interface IBookCardProps {
  item: Book;
  thumbnail: string;
  author: string;
  amount: string;
  added: boolean;
  onBookClick: (book: Book) => void;
  onFavoriteClick: () => void;
}

const BookCard = ({
  item,
  thumbnail,
  author,
  amount,
  added,
  onBookClick,
  onFavoriteClick,
}: IBookCardProps) => (
  <div className={styles.card}>
    <img src={thumbnail} onClick={() => onBookClick(item)} alt={item.volumeInfo.title} />
    <MdOutlineFavorite
      className={added ? styles.favoriteAdded : styles.addToFavorite}
      onClick={onFavoriteClick}
    />
    <div className={styles.inform}>
      <h3 className={styles.title}>{item.volumeInfo.title}</h3>
      <h4 className={styles.author}>{author}</h4>
      <h4 className={styles.amount}>{amount}</h4>
    </div>
  </div>
);

export default BookCard;
