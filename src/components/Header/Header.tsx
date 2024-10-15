import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { GiBookCover } from 'react-icons/gi';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <GiBookCover size={70} className={styles.logo} />
        </Link>
        <div className={styles.title}>
          <h1>BOOKSHELF</h1>
          <h4>e-books search service</h4>
        </div>
      </div>
    </>
  );
};

export default Header;
