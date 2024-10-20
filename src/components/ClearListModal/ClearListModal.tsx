import React from 'react';

import { clearList } from '../../redux/favSlice/favSlice';
import { useAppDispatch } from '../../redux/store';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import styles from './ClearListModal.module.scss';

interface IClearListModal {
  isOpen: boolean;
  onClose: () => void;
}

const ClearListModal: React.FC<IClearListModal> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const handleClearList = () => {
    dispatch(clearList());
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} modalClass={styles.customModal}>
      <div className={styles.top}>
        <p>Are you sure you want to clear the list?</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleClearList}>Confirm</Button>
      </div>
    </Modal>
  );
};

export default ClearListModal;
