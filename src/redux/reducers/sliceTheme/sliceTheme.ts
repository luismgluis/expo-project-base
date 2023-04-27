import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import persistenceInitialState from '../../persistence';
import { RootState } from '../../store';

export type ThemeType = 'light' | 'dark';
const sliceData = persistenceInitialState({
  name: 'theme',
  initialState: {
    theme: 'light' as ThemeType,
  },
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});
const now = new Date();
// console.log("now", now);

if (now.getHours() > 18 || now.getHours() < 4) {
  (sliceData.initialState as any).theme = 'dark';
}

(sliceData.initialState as any).theme = 'light';
const sliceTheme = createSlice(sliceData);
export const themeSelector = (state: RootState) => state.sliceTheme;
export const themeActions = sliceTheme.actions;

export default sliceTheme;
