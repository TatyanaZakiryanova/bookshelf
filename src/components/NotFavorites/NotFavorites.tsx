import { GiBookCover } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import Button from '../UI/Button/Button';
import styles from './NotFavorites.module.scss';

const NotFavorites = () => {
  return (
    <div className={styles.notFavorites}>
      <GiBookCover className={styles.icon} />
      <p>Вы ещё не добавляли книги в избранное.</p>
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Button className={styles.backButton}>На главную</Button>
      </Link>
    </div>
  );
};

export default NotFavorites;
