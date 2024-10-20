import { MdKeyboardArrowDown } from 'react-icons/md';

import styles from './Dropdown.module.scss';

interface IDropdownProps<T> {
  options: T[];
  currentOption: T;
  handleOption: (selectedOption: T) => void;
  label: string;
}

const Dropdown = <T extends { name: string; value: string }>({
  options,
  currentOption,
  handleOption,
  label,
}: IDropdownProps<T>) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.order}>
        {label} <MdKeyboardArrowDown size={15} />
      </div>
      <div className={styles.list}>
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOption(option)}
              className={currentOption.value === option.value ? styles.active : ''}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
