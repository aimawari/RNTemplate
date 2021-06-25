import Theme from '~enum/ThemeEnum';
import ThemeStyle from '~/styles/theme/Theme';
import {ThemeActionTypes} from '../types/ThemeTypes';
import {AnyAction} from 'redux';

const INITIAL_STATE: {
  theme: Theme;
  colors: {[member: string]: string};
} = {
  theme: Theme.LIGHT,
  colors: ThemeStyle[Theme.LIGHT],
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ThemeActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
        colors: ThemeStyle[action.payload as Theme],
      };
    default:
      return state;
  }
};
