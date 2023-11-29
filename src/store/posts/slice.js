import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      addPosts: (state, action) => {
        state.posts.push(action.payload)
      }
    },
  })
  
  export const { addPosts } = postsSlice.actions