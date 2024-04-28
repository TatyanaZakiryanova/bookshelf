import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setOrderParameter } from '../../redux/searchSlice/searchSlice';
import { fetchBooks } from '../../redux/booksSlice/asyncActions';
import styles from './Order.module.scss';
import { OrderEnum, OrderParams } from '../../redux/searchSlice/types';

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
  const { search } = useAppSelector((state) => state.searchReducer);
  const ordervalue = useAppSelector((state) => state.searchReducer.orderBy);
  const orderBy = ordervalue.parameter;
  const filter = useAppSelector((state) => state.searchReducer.filter.value);

  const onClickOrder = (obj: OrderParams) => {
    dispatch(setOrderParameter(obj));
  };

  useEffect(() => {
    dispatch(fetchBooks({ search, orderBy, filter }));
  }, [orderBy]);

  return (
    <>
      <div className={styles.popup}>
        Order: <span>{ordervalue.name}</span>
        <div className={styles.order}>
          <ul>
            {order.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickOrder(obj)}
                className={ordervalue.parameter === obj.parameter ? styles.active : ''}
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
