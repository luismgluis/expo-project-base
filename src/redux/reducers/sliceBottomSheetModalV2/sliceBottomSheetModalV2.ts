import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
export type BottomSheetModalOption = {
  id?: string;
  dark?: boolean;
};
type BottomSheetAlertType = {
  id: string | number;
  title: string;
  content: any;
  close: () => void;
  options?: BottomSheetModalOption;
};
const sliceBottomSheetModalV2 = createSlice({
  name: "sliceBottomSheetModalV2",
  initialState: {
    open: false,
    allAlerts: [] as BottomSheetAlertType[],
  },
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    addAlert: (state, action: PayloadAction<BottomSheetAlertType>) => {
      // console.log("allAlerts", action);
      const alert = action.payload;
      const index = state.allAlerts.length;
      alert.id = !alert.id ? index : alert.id;
      state.allAlerts.push(alert);
    },
    removeAlert: (state, action: PayloadAction<string | number>) => {
      // console.log("removeAlert", state);
      const newdata = state.allAlerts.filter((i) => i.id !== action.payload);
      state.allAlerts = newdata;
    },
  },
});
export const sliceBottomSheetModalV2Actions = sliceBottomSheetModalV2.actions;

export default sliceBottomSheetModalV2;
