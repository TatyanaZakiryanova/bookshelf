import { useEffect, useRef, useState } from 'react';
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
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleSelect = (item: T) => {
    handleOption(item);
    setOpenDropdown(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.order} onClick={toggleDropdown}>
        {label} <MdKeyboardArrowDown size={15} />
      </div>
      {openDropdown && (
        <div className={styles.list}>
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={currentOption.value === option.value ? styles.active : ''}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
