import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2 className={styles.title}>Bookshelf</h2>
      <p className={styles.subtitle}>сервис поиска электронных книг</p>
      <a href="https://developers.google.com/books" target="_blank" rel="noreferrer">
        API
      </a>
      <p>2024</p>
    </div>
  );
};

export default Footer;
