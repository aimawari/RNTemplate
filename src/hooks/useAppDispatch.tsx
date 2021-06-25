import {useDispatch} from 'react-redux';
import type {AppDispatch} from '~redux/stores/';

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();
