import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state?.monitoring || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  monitoring => monitoring.loading,
);

export const selectError = createSelector(
  [selectDomain],
  monitoring => monitoring.error,
);

export const selectResult = createSelector(
  [selectDomain],
  monitoring => monitoring.result,
);
