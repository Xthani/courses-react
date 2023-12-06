import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { fetchUsers } from './actions';

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
       state.users = action.payload;
       state.isLoad = false;
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
       state.error = action.payload;
       state.isLoad = false;
      });
      builder.addCase(fetchUsers.pending, (state) => {
       state.isLoad = true;
      });
   },
  })
  
  export const {} = usersSlice.actions