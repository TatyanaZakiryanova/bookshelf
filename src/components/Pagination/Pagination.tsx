import { useSelector } from 'react-redux';
import { setStartIndex } from '../../redux/searchSlice/searchSlice';
import { startIndexSelector } from '../../redux/searchSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './Pagination.module.scss';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { ImFirst } from 'react-icons/im';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const startIndex = useSelector(startIndexSelector);

  const onClickPage = (startIndex: number) => {
    dispatch(setStartIndex(startIndex));
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className={styles.pagination}>
      <button onClick={() => onClickPage(0)} disabled={startIndex === 0}>
        <ImFirst size={20} className={styles.arrow} />
      </button>
      <button onClick={() => onClickPage(startIndex - 20)} disabled={startIndex === 0}>
        <BiSolidLeftArrow size={15} className={styles.arrow} />
      </button>
      <button onClick={() => onClickPage(startIndex + 20)}>
        <BiSolidRightArrow size={15} className={styles.arrow} />
      </button>
    </div>
  );
};

export default Pagination;
