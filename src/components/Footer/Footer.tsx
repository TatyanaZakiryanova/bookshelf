import styles from './Footer.module.scss';
import { GiBookCover } from 'react-icons/gi';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>
        <GiBookCover size={20} className={styles.logo} />
        Bookshelf
      </h2>
      <p className={styles.bottom}>e-books search service</p>
      <br />
      <a href="https://developers.google.com/books" target="_blank">
        API
      </a>
      <br />
      <p>2024</p>
    </div>
  );
};

export default Footer;
