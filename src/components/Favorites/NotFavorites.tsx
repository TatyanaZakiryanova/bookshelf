import { GiBookCover } from 'react-icons/gi';
import styles from './NotFavorites.module.scss';
import { Link } from 'react-router-dom';

const NotFavorites = () => {
  return (
    <div className={styles.notfav}>
      <GiBookCover className={styles.icon} />
      <h3>You haven't added books to your favorites yet.</h3>
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <button className={styles.back}>Home</button>
      </Link>
    </div>
  );
};

export default NotFavorites;
