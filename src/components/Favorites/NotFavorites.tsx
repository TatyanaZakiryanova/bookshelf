import { GiBookCover } from 'react-icons/gi';
import styles from './NotFavorites.module.scss';
import { Link } from 'react-router-dom';

const NotFavorites = () => {
  return (
    <div>
      <div className={styles.notfav}>
        <GiBookCover className={styles.icon} />
        <br />
        You haven't added books to your favorites yet.
        <br />
        <Link to="/">
          <button
            className={styles.back}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ← Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFavorites;
