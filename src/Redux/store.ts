import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducer/BlogReducer'
import MyBlogReducer from './reducer/MyBlogReducer'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    myBlog: MyBlogReducer
  }
})

// Lấy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
