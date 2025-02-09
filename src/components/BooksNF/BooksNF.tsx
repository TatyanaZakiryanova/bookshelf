import styles from './BooksNF.module.scss';

const BooksNotFound = () => {
  return (
    <div className={styles.error}>
      <h3>Книги не найдены</h3>
    </div>
  );
};

export default BooksNotFound;
