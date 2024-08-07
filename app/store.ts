import { JobPostApi } from './service/jobPost'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [JobPostApi.reducerPath]: JobPostApi.reducer,
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(JobPostApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch