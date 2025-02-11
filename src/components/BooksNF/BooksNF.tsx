import styles from './BooksNF.module.scss';

const BooksNotFound = () => {
  return (
    <div className={styles.error}>
      <p>Книги не найдены</p>
    </div>
  );
};

export default BooksNotFound;
