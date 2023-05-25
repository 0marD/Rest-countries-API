import { configureStore } from '@reduxjs/toolkit'
import countrySelectedReducer from './slices/countrySlice'

export const store = configureStore({
  reducer: {
    countrySelected: countrySelectedReducer,
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
