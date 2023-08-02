import {createSlice} from '@reduxjs/toolkit';
export const initialState = {
  discounts: [],
  searchData: [],
  loading: false,
  error: false,
};
const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setDiscounts: (state, action) => {
      state.discounts = action.payload;
      state.loading = true;
      state.error = false;
    },
    setSearchDiscounts: (state, action) => {
      state.searchData = action.payload;
    },
  },
});
export const {setDiscounts, setSearchDiscounts} = discountSlice.actions;
export default discountSlice.reducer;
export const discountSelector = state => state.discountReducer;
