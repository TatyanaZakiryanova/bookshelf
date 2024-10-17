import Skeleton from './Skeleton';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import styles from './Main.module.scss';
import Order from '../../components/Order/Order';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';
import BooksNF from '../../components/BooksNF/BooksNF';
import Language from '../../components/Language/Language';
import { useSelector } from 'react-redux';
import { itemsSelector, statusSelector } from '../../redux/booksSlice/selectors';
import { favItemsSelector } from '../../redux/favSlice/selectors';
import { Status } from '../../redux/booksSlice/types';

const Main = (): JSX.Element => {
  const items = useSelector(itemsSelector);
  const status = useSelector(statusSelector);
  const addedItems = useSelector(favItemsSelector);
  const itemsLength = addedItems ? addedItems.length : 0;

  const skeleton = Array.from({ length: 10 }, (_, index) => <Skeleton key={index} />);

  return (
    <>
      <Search />
      <Link to="favorites" className={styles.favorites}>
        <MdFavorite className={styles.icon} />
        {itemsLength}
      </Link>
      {status === Status.IDLE ? null : status === Status.ERROR ? (
        <BooksNF />
      ) : (
        <>
          <div className={styles.top}>
            <Language />
            <Order />
            <Filter />
          </div>
          <div className={styles.container}>
            {status === Status.LOADING ? skeleton : <Card books={items} />}
          </div>
          <div>
            <Pagination />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
