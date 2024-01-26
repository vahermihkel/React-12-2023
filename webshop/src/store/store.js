import { configureStore } from '@reduxjs/toolkit'
import cartSumReducer from './cartSumSlice';

export default configureStore({
  reducer: {
    cartSum: cartSumReducer
  }
})

