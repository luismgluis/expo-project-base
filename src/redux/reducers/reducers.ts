import { combineReducers } from "redux";
import sliceBottomSheetModalV2 from "./sliceBottomSheetModalV2/sliceBottomSheetModalV2";
import sliceNotification from "./sliceNotification/sliceNotification";
import sliceOrders from "./sliceOrders/sliceOrders";
import sliceSession from "./sliceSession/sliceSession";
import sliceTheme from "./sliceTheme/sliceTheme";

const reducers = combineReducers({
  sliceNotification: sliceNotification.reducer,
  sliceBottomSheetModalV2: sliceBottomSheetModalV2.reducer,
  sliceSession: sliceSession.reducer,
  sliceTheme: sliceTheme.reducer,
  sliceOrders: sliceOrders.reducer,
});

export default reducers;
