import {createSlice} from '@reduxjs/toolkit';
export const initialState = {
  carouselItems: [],
  loading: false,
  error: false,
};
const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setCarouselItems: (state, action) => {
      state.carouselItems = action.payload;
      state.loading = true;
      state.error = false;
    },
  },
});
export const {setCarouselItems} = carouselSlice.actions;
export default carouselSlice.reducer;
export const carouselSelector = state => state.carouselReducer;
