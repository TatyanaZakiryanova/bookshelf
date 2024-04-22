import { FaBook } from 'react-icons/fa';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.icon}>
            <FaBook className={styles.logo} size={60} />
          </div>
        </Link>
        <div className={styles.title}>
          <h1>BOOKSHELF</h1>
          <h4>book search service on google books</h4>
        </div>
      </div>
    </>
  );
};

export default Header;
