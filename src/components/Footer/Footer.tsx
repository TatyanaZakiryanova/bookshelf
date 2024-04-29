import { FaBook } from 'react-icons/fa6';
import styles from './Footer.module.scss';
import { RiExternalLinkLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>
        {' '}
        <FaBook size={17} className={styles.logo} />
        Bookshelf
      </h2>
      <p className={styles.bottom}>e-books search service</p>
      <br />
      <a href="https://developers.google.com/books" target="_blank">
        <RiExternalLinkLine />
        API
      </a>
      <br />
      <p>2024</p>
    </div>
  );
};

export default Footer;
