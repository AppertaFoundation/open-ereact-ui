import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state?.patientList || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  patientListState => patientListState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  patientListState => patientListState.error,
);

export const selectPatientList = createSelector(
  [selectDomain],
  patientListState => patientListState.patientList,
);

export const selectFilters = createSelector(
  [selectDomain],
  patientListState => patientListState.filters,
);
