import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { setOrderParameter } from '../../redux/searchSlice/searchSlice';
import { fetchBooks } from '../../redux/booksSlice/asyncActions';
import styles from './Order.module.scss';
import { OrderEnum, OrderParams } from '../../redux/searchSlice/types';
import { useSelector } from 'react-redux';
import {
  filterValueSelector,
  langRestrictValueSelector,
  orderByNameSelector,
  orderByParameterSelector,
  searchSelector,
  startIndexSelector,
} from '../../redux/searchSlice/selectors';

const order: OrderParams[] = [
  {
    name: 'Relevance',
    parameter: OrderEnum.RELEVANCE,
  },
  {
    name: 'Newest',
    parameter: OrderEnum.NEWEST,
  },
];

const Order = () => {
  const dispatch = useAppDispatch();

  const search = useSelector(searchSelector);
  const startIndex = useSelector(startIndexSelector);
  const filter = useSelector(filterValueSelector);
  const langRestrict = useSelector(langRestrictValueSelector);
  const orderBy = useSelector(orderByParameterSelector);
  const orderName = useSelector(orderByNameSelector);

  const [initialQueryDone, setInitialQueryDone] = useState(false);

  const onClickOrder = (obj: OrderParams) => {
    dispatch(setOrderParameter(obj));
  };

  useEffect(() => {
    if (initialQueryDone) {
      dispatch(fetchBooks({ search, orderBy, filter, startIndex, langRestrict }));
    }
    setInitialQueryDone(true);
  }, [orderBy, filter, startIndex, langRestrict]);

  return (
    <>
      <div className={styles.popup}>
        Order: <span>{orderName}</span>
        <div className={styles.list}>
          <ul>
            {order.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickOrder(obj)}
                className={orderBy === obj.parameter ? styles.active : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Order;
