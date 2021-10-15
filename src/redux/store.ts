import { configureStore } from "@reduxjs/toolkit";
// ...

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
