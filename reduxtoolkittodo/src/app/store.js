import {configueStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configueStore({
      reducer:todoReducer
})