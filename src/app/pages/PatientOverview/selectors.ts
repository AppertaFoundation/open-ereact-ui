import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { overviewSaga } from './saga';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state?.overview || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  overview => overview.loading,
);

export const selectError = createSelector(
  [selectDomain],
  overview => overview.error,
);

export const selectSituationIlnessStatment = createSelector(
  [selectDomain],
  overview => overview.situationIlnessStatment,
);

export const selectSituationBackground = createSelector(
  [selectDomain],
  overview => overview.situationBackground,
);
export const selectContingencyPlanning = createSelector(
  [selectDomain],
  overview => overview.contingencyPlanning,
);
