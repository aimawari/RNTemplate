import AsyncStorage from '@react-native-async-storage/async-storage';

import Language from '~enum/LanguageEnum';

import {LanguageActionTypes} from '../types/LanguageTypes';
import {AppThunk} from '~redux/types/AppThunk';

export const initLanguage = (): AppThunk<Promise<boolean>> => async (
  dispatch,
  getState,
) => {
  const lang = await AsyncStorage.getItem('@language');

  if (!lang) {
    const {language} = getState();

    await AsyncStorage.setItem('@language', language);
  } else {
    dispatch({
      type: LanguageActionTypes.CHANGE_LANGUAGE,
      payload: lang,
    });
  }

  return true;
};

export const changeLanguage = (
  language: Language,
): AppThunk => async dispatch => {
  await AsyncStorage.setItem('@language', language);

  dispatch({
    type: LanguageActionTypes.CHANGE_LANGUAGE,
    payload: language,
  });
};
