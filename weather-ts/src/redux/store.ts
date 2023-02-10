import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import weatherReducer from './weather';

export const store = configureStore({
  reducer: {
    weatherReducer
  }
})

export const useAppDispatch: () => typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
