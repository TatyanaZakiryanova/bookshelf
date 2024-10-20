import { GiBookCover } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import Button from '../UI/Button/Button';
import styles from './NotFavorites.module.scss';

const NotFavorites = () => {
  return (
    <div className={styles.notfav}>
      <GiBookCover className={styles.icon} />
      <p>You haven&apos;t added books to your favorites yet.</p>
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Button className={styles.back}>Home</Button>
      </Link>
    </div>
  );
};

export default NotFavorites;
