import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  users: [],
  loading: false,
  error: false,
  user: {},
  guest: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = false;
    },
    setUser: (state, action) => {
      console.log(action.payload, 'action');
      state.user = action.payload;
      state.loading = true;
      state.error = false;
    },
    createUser: (state, action) => {
      state.users.unshift(action.payload);
      state.loading = false;
    },
    deleteUser: (state, action) => {
      state.users.filter(user => user.id !== action.payload.id);
      state.loading = false;
    },

    clearUser: state => {
      state.error = false;
      state.loading = false;
      state.user = {};
    },

    setGuest: (state, action) => {
      state.guest = action.payload;
    },
  },
});
export const {setUser, deleteUser, getUser, setGuest, clearUser} =
  userSlice.actions;
export default userSlice.reducer;
export const userSelector = state => state.userReducer;
