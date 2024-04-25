import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import { VscError } from 'react-icons/vsc';

const NotFound = () => {
  return (
    <>
      <div className={styles.error}>
        <VscError size={60} />
        Data not found
        <Link to="">
          <button className={styles.back}>← Home</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
