import { combineReducers } from 'redux';
import sliceBottomSheetModalV2 from './sliceBottomSheetModalV2/sliceBottomSheetModalV2';
import sliceOrders from './sliceOrders/sliceOrders';
import sliceSession from './sliceSession/sliceSession';
import sliceTheme from './sliceTheme/sliceTheme';

const reducers = combineReducers({
  sliceBottomSheetModalV2: sliceBottomSheetModalV2.reducer,
  sliceSession: sliceSession.reducer,
  sliceTheme: sliceTheme.reducer,
  sliceOrders: sliceOrders.reducer,
});

export default reducers;
