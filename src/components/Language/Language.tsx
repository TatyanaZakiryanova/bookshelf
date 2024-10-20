import { useSelector } from 'react-redux';

import { setLanguageValue } from '../../redux/searchSlice/searchSlice';
import { langRestrictSelector } from '../../redux/searchSlice/selectors';
import { LangEnum, LangParams } from '../../redux/searchSlice/types';
import { useAppDispatch } from '../../redux/store';
import Dropdown from '../UI/Dropdown/Dropdown';

const language: LangParams[] = [
  {
    name: 'All',
    value: LangEnum.ALL,
  },
  {
    name: 'English',
    value: LangEnum.EN,
  },
  {
    name: 'Deutsch',
    value: LangEnum.DE,
  },
  {
    name: 'Español',
    value: LangEnum.ES,
  },
  {
    name: 'Français',
    value: LangEnum.FR,
  },
  {
    name: 'Indonesia',
    value: LangEnum.ID,
  },
  {
    name: 'Italiano',
    value: LangEnum.IT,
  },
  {
    name: 'Polski',
    value: LangEnum.PL,
  },
  {
    name: 'Português',
    value: LangEnum.PT,
  },
  {
    name: 'Русский',
    value: LangEnum.RU,
  },
  {
    name: '한국어',
    value: LangEnum.KO,
  },
  {
    name: '日本語',
    value: LangEnum.JA,
  },
];

const Language = () => {
  const dispatch = useAppDispatch();
  const langRestrict = useSelector(langRestrictSelector);

  const onClickLanguage = (obj: LangParams) => {
    dispatch(setLanguageValue(obj));
  };
  return (
    <Dropdown
      options={language}
      currentOption={langRestrict}
      handleOption={onClickLanguage}
      label={langRestrict.name}
    />
  );
};

export default Language;
