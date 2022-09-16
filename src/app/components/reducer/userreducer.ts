import { createSlice } from '@reduxjs/toolkit';
import { RootState }   from '../../store';
import { userlist }    from '../Lists/userlist';

const userSlicer = createSlice({
  name         : 'user',
  initialState : userlist,
  reducers: {
   loginUser (state, action) {
    return [
      ...state.map(user => {
        if (user.login === action.payload.login) {
          return {...user, isLogged: true}
        } 
        return user;          
      })];       
    },
    logOutUser (state, action) {
      return [
        ...state.map(user => {
          if (user.login === action.payload.login) {
            return {...user, isLogged: false}
          } 
          return user;          
        })];       
      },
    addUser (state, action) {
      return [
        ...state,
        {...action.payload}
      ]
    },
  }
});

export const { loginUser, addUser, logOutUser } = userSlicer.actions;

export const userReducer = userSlicer.reducer;

export const getUser = (state: RootState) => state.user;