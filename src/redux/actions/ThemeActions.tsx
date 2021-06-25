import AsyncStorage from '@react-native-async-storage/async-storage';

import Theme from '~enum/ThemeEnum';

import {ThemeActionTypes} from '~redux/types/ThemeTypes';
import {AppThunk} from '~redux/types/AppThunk';

export const initTheme = (): AppThunk<Promise<boolean>> => async (
  dispatch,
  getState,
) => {
  const theme = await AsyncStorage.getItem('@theme');

  if (!theme) {
    const {themeData} = getState();

    await AsyncStorage.setItem('@theme', themeData.theme);
  } else {
    dispatch({
      type: ThemeActionTypes.CHANGE_THEME,
      payload: theme,
    });
  }

  return true;
};

export const changeTheme = (theme: Theme): AppThunk => async dispatch => {
  await AsyncStorage.setItem('@theme', theme);

  dispatch({
    type: ThemeActionTypes.CHANGE_THEME,
    payload: theme,
  });
};
