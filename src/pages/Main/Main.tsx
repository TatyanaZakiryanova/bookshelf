import { useAppSelector } from '../../redux/store';
import Skeleton from './Skeleton';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import styles from './Main.module.scss';
import BooksNotFound from '../../components/BooksNotFound/BooksNotFound';

const Main = (): JSX.Element => {
  const { items, status } = useAppSelector((state) => state.booksReducer);

  const addedItems = useAppSelector((state) => state.favReducer.items.length);

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <Search />
      <Link to="favorites" className={styles.favorites}>
        <MdFavorite className={styles.icon} />
        {addedItems}
      </Link>
      {status === 'null' ? null : status === 'error' ? (
        <BooksNotFound />
      ) : (
        <div className={styles.container}>
          {' '}
          {status === 'loading' ? skeleton : <Card book={items} />}
        </div>
      )}
    </>
  );
};

export default Main;
