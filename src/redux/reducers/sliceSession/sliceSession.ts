import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import UserModel from "./../../../models/UserModel";
type CurrentUserModelNull = UserModel | null;

const sliceSession = createSlice({
  name: "session",
  initialState: {
    loading: false,
    me: null as CurrentUserModelNull,
    currentBusiness: null as CurrentUserModelNull,
    nickNameCurrentBusiness: "",
    loadingBusiness: true,
  },
  reducers: {
    setMe: (state, action: PayloadAction<CurrentUserModelNull>) => {
      state.me = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLodingBusiness: (state, action: PayloadAction<boolean>) => {
      state.loadingBusiness = action.payload;
    },
    setBusiness: (state, action: PayloadAction<CurrentUserModelNull>) => {
      state.currentBusiness = action.payload;
    },
    setNickNameBusiness: (state, action: PayloadAction<string>) => {
      state.nickNameCurrentBusiness = action.payload;
    },
  },
});
export const sessionActions = sliceSession.actions;

export default sliceSession;
