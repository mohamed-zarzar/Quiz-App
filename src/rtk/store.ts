import { configureStore } from '@reduxjs/toolkit';
import questionInfoSlice from './features/questionInfoSlice';



const store = configureStore({
    reducer: {
      question:questionInfoSlice,
    }
  })










  export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch