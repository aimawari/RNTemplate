import Language from '~enum/LanguageEnum';
import en from './en.json';
import th from './th.json';

type i18n = {
  [key in Language]: {[member: string]: string};
};

const i18n: i18n = {
  [Language.EN]: en,
  [Language.TH]: th,
};

export default i18n;
