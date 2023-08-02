import {createSlice} from '@reduxjs/toolkit';
export const initialState = {
  sales: [],
  searchData: [],
  filterData: [],
  loading: false,
  error: false,
};
const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {
    setSales: (state, action) => {
      state.sales = action.payload;
      state.loading = true;
      state.error = false;
    },
    setSearchSales: (state, action) => {
      state.searchData = action.payload;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    }, 
  },
});
export const {setSales, setSearchSales, setFilterData} = saleSlice.actions;
export default saleSlice.reducer;
export const saleSelector = state => state.saleReducer;
