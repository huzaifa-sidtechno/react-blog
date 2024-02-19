import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    userToken: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload.user;
      state.userToken = action.payload.access_token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userInfo = null;
      state.userToken = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
