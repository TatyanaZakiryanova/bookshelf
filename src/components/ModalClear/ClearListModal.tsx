import { useAppDispatch } from '../../redux/store';
import { clearList } from '../../redux/favSlice/favSlice';
import styles from './ClearListModal.module.scss';

const ClearListModal = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch();

  const handleClearList = () => {
    dispatch(clearList());
    onClose();
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.content}>
          <button onClick={onClose} className={styles.close}>
            X
          </button>
          <p>Are you sure you want to clear the list?</p>
          <div className={styles.buttons}>
            <button onClick={onClose}>Cancel</button>
            <button onClick={handleClearList}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClearListModal;
