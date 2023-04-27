import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import OrderModel from '../../../models/orders/OrderModel';

const sliceOrders = createSlice({
  name: 'orders',
  initialState: {
    loading: false,
    all: [] as OrderModel[],
  },
  reducers: {
    addOrder: (state, action: PayloadAction<OrderModel>) => {
      state.all.push(action.payload);
    },
    setOrders: (state, action: PayloadAction<OrderModel[]>) => {
      state.all = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const ordersActions = sliceOrders.actions;

export default sliceOrders;
