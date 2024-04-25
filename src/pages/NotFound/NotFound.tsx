import { TbBookOff } from 'react-icons/tb';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <div className={styles.error}>
        <TbBookOff size={120} />
        Data not found
        <p className={styles.bottom}>Please try again later</p>
      </div>
    </>
  );
};

export default NotFound;
