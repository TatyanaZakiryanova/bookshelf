import { setStartIndex } from '../../redux/searchSlice/searchSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Pagination.module.scss';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { ImFirst } from 'react-icons/im';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const startIndex = useAppSelector((state) => state.searchReducer.startIndex);

  const onClickNextPage = (startIndex: number) => {
    dispatch(setStartIndex(startIndex + 20));
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const onClickPreviousPage = (startIndex: number) => {
    dispatch(setStartIndex(startIndex - 20));
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const onClickFirstPage = (startIndex: number) => {
    dispatch(setStartIndex(startIndex));
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className={styles.pagination}>
      <button onClick={() => onClickFirstPage(0)} disabled={startIndex === 0}>
        <ImFirst size={20} className={styles.arrow} />
      </button>
      <button onClick={() => onClickPreviousPage(startIndex)} disabled={startIndex === 0}>
        <BiSolidLeftArrow size={15} className={styles.arrow} />
      </button>
      <button onClick={() => onClickNextPage(startIndex)}>
        <BiSolidRightArrow size={15} className={styles.arrow} />
      </button>
    </div>
  );
};

export default Pagination;
