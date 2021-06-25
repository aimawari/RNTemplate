import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../stores';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
