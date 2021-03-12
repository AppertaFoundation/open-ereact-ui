import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { overviewSaga } from './saga';
import { OverviewState } from './types';

export const initialState: OverviewState = {
  loading: false,
  error: null,
  situationIlnessStatment: 'Patient unwell day 2 post op',
  update: {
    pending: false,
    success: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    pending(state, action) {
      state.update.pending = true;
      state.update.error = null;
      state.update.success = false;
    },
    success(state) {
      state.update.pending = false;
      state.update.success = true;
      state.update.error = null;
    },
    error(state, action) {
      state.update.pending = false;
      state.update.success = true;
      state.update.error = action.payload;
    },
    situationIlnessStatment(state, action) {
      state.situationIlnessStatment = action.payload.situationInessStatment;
    },
    loadSituationBackgrond(state) {
      state.loading = true;
      state.error = null;
    },
    situationBackgorundLoaded(state, action) {
      state.loading = false;
      state.error = null;
      state.situationBackground = action.payload;
    },
    loadContingencyPlanning(state) {
      state.loading = true;
      state.error = null;
    },
    contingencyPlanningLoaded(state, action) {
      state.loading = false;
      state.error = null;
      state.contingencyPlanning = action.payload;
    },
  },
});

export const { actions, reducer } = slice;

export const useOverviewSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: overviewSaga });
  return { actions: slice.actions };
};
