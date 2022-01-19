import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "statsDapp",
  initialState: {
    user: {
      account: undefined,
    },
    token: {
      symbol: undefined,
      totalSupply: undefined,
      price: undefined,
    },
  },
  reducers: {
    setUserWallet: (state, action) => {
      state.user.account = action.payload.account;
    },
  },
});

export const { setUserWallet } = storeSlice.actions;

export default storeSlice.reducer;
