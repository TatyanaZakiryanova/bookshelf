import { SlArrowLeft } from 'react-icons/sl';
import { VscError } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.error}>
      <VscError size={40} />
      Data not found
      <Link to="">
        <Button className={styles.back}>
          <SlArrowLeft size={16} /> Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
