import {createSlice} from '@reduxjs/toolkit';
export const initialState = {
  banks: [],
  searchData: [],
  loading: false,
  error: false,
};
const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    setBanks: (state, action) => {
      state.banks = action.payload;
      state.loading = true;
      state.error = false;
    },
    setSearchBanks: (state, action) => {
      state.searchData = action.payload;
    },
  },
});
export const {setBanks, setSearchBanks} = bankSlice.actions;
export default bankSlice.reducer;
export const bankSelector = state => state.bankReducer;
