import {AnyAction} from 'redux';
import Language from '~enum/LanguageEnum';
import {LanguageActionTypes} from '../types/LanguageTypes';

const INITIAL_STATE = Language.EN;

export default (state = INITIAL_STATE, action: AnyAction) => {
  // console.log('action', action);
  switch (action.type) {
    case LanguageActionTypes.CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
