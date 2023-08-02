import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  featuredItems: [],
  loading: false,
  error: false,
};
const featuredSlice = createSlice({
  name: 'featured',
  initialState,
  reducers: {
    setFeaturedItems: (state, action) => {
      state.featuredItems = action.payload;
      state.loading = true;
      state.error = false;
    },
  },
});
export const {setFeaturedItems} = featuredSlice.actions;
export default featuredSlice.reducer;
export const featuredSelector = state => state.featuredReducer;
