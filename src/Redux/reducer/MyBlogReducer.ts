import { initialMyPostList } from './../../constant/myBlog'
import { MyPost } from './../types/MyBlogType'
import { createSlice } from '@reduxjs/toolkit'

export interface MyBlogState {
  Mypost: MyPost[]
}
const initialState: MyBlogState = {
  Mypost: initialMyPostList
}

const MyBlogReducer = createSlice({
  name: 'MyBlogReducer',
  initialState,
  reducers: {}
})

export const {} = MyBlogReducer.actions

export default MyBlogReducer.reducer
