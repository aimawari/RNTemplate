import i18n from '~/i18n';
import {useMemo} from 'react';
import {useAppSelector} from './useAppSelector';
import Language from '~enum/LanguageEnum';

const useTranslation = () => {
  const language: Language = useAppSelector(state => state.language);

  return (word: string) =>
    useMemo(() => (i18n[language][word] ? i18n[language][word] : ''), [
      language,
    ]);
};

export default useTranslation;
