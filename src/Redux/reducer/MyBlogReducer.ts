import { initialMyPostList } from './../../constant/myBlog'
import { MyPost } from './../types/MyBlogType'
import { createSlice } from '@reduxjs/toolkit'

export interface MyBlogState {
  MyPostList: MyPost[]
}
const initialState: MyBlogState = {
  MyPostList: initialMyPostList
}

const MyBlogReducer = createSlice({
  name: 'MyBlogReducer',
  initialState,
  reducers: {}
})

export const {} = MyBlogReducer.actions

export default MyBlogReducer.reducer
