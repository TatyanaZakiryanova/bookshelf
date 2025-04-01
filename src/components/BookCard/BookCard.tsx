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
    <ul>
      <li className={styles.title}>{item.volumeInfo.title}</li>
      <li className={styles.author}>{author}</li>
      <li className={styles.amount}>{amount}</li>
    </ul>
  </div>
);

export default BookCard;
