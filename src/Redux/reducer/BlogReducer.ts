import { createReducer, createAction } from '@reduxjs/toolkit'
import { Post } from 'Redux/types/BlogType'
import { initialPostList } from 'constant/blog'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

export const addPost = createAction<Post>('blog/addPost')

export const deletePost = createAction<string>('blog/deletePost')

export const startEditingPost = createAction<string>('blog/startEditingPost')

export const cancelEditingPost = createAction('blog/cancelEditingPost')

export const finishEditingPost = createAction<Post>('blog/finishEditingPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state: BlogState, action) => {
      const post = action.payload
      state.postList.push(post)
    })

    .addCase(deletePost, (state: BlogState, action) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditingPost, (state: BlogState, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    })
    .addCase(cancelEditingPost, (state) => {
      state.editingPost = null
    })
    .addCase(finishEditingPost, (state, action) => {
      const postId = action.payload.id
      // eslint-disable-next-line array-callback-return
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    })
})

export default blogReducer
