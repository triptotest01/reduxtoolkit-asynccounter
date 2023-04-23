import { configureStore } from '@reduxjs/toolkit';
//  참고: export가 default 일 경우 import 시 as 뒤에 작명가능
//  import default as userReducer from "./user" 

import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
