import { TbFaceIdError } from 'react-icons/tb';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <div className={styles.error}>
        <TbFaceIdError size={60} />
        Data not found
      </div>
    </>
  );
};

export default NotFound;
