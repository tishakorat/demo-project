import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter/counterSlice';
import HomeReducer from "../features/counter/home/HomeSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: HomeReducer
  },
});
