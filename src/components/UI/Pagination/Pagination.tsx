import { useEffect } from 'react';
import { RiArrowLeftDoubleLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import { statusSelector } from '../../../redux/booksSlice/selectors';
import { Status } from '../../../redux/booksSlice/types';
import { setStartIndex } from '../../../redux/searchSlice/searchSlice';
import { startIndexSelector } from '../../../redux/searchSlice/selectors';
import { useAppDispatch } from '../../../redux/store';
import Button from '../Button/Button';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const startIndex = useSelector(startIndexSelector);
  const status = useSelector(statusSelector);

  const currentPage = Math.floor(startIndex / 40) + 1;

  const onClickPage = (startIndex: number) => {
    dispatch(setStartIndex(startIndex));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [startIndex]);

  return (
    <>
      <div className={styles.pagination}>
        <Button onClick={() => onClickPage(0)} disabled={startIndex === 0}>
          <RiArrowLeftDoubleLine size={15} className={styles.pageArrow} />
        </Button>
        <Button onClick={() => onClickPage(startIndex - 40)} disabled={startIndex === 0}>
          <RiArrowLeftSLine size={15} className={styles.pageArrow} />
        </Button>
        <Button
          onClick={() => onClickPage(startIndex + 40)}
          disabled={status === Status.NO_MORE_BOOKS}
        >
          <RiArrowRightSLine size={15} className={styles.pageArrow} />
        </Button>
      </div>
      <div className={styles.page}>
        <span className={styles.number}>{currentPage}</span>
      </div>
    </>
  );
};

export default Pagination;
