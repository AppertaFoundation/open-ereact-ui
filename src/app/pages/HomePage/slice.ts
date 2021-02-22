import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { patientListSaga } from './saga';
import { PatientListState } from './types';

export const initialState: PatientListState = {
  patientList: [],
  loading: false,
  error: null,
  filters: { sort: { value: 'DESC', key: 'news2' } },
};

const slice = createSlice({
  name: 'patientList',
  initialState,
  reducers: {
    loadPatientList(state, action) {
      state.loading = true;
      state.error = null;
      state.patientList = [];
    },
    patientListLoaded(state, action) {
      const patientList = action.payload;
      state.patientList = patientList;
      state.loading = false;
    },
    addFilters(state, action) {
      const { sort } = action.payload;
      state.filters.sort = sort;
    },
    // patientListError(state, action: PayloadAction<PatientListErrorType>) {
    //   state.error = action.payload;
    //   state.loading = false;
    // },
  },
});

export const { actions, reducer } = slice;

export const usePatientListSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: patientListSaga });
  return { actions: slice.actions };
};
