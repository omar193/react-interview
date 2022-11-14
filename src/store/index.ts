import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movieReducer from '../store/reducer/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,  
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;