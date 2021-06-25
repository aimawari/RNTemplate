import {combineReducers} from 'redux';
import LanguageReducer from './LanguageReducer';
import ThemeReducer from './ThemeReducer';

export default combineReducers({
  // Define reducer
  language: LanguageReducer,
  themeData: ThemeReducer,
});
