import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { monitoringSaga } from './saga';
import { MonitoringState } from './types';

export const initialState: MonitoringState = {
  result: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'monitoring',
  initialState,
  reducers: {
    getResult(state, action) {
      state.loading = true;
      state.error = null;
      state.result = null;
    },
    resultLoaded(state, action) {
      const patient = action.payload;
      state.result = patient;
      state.loading = false;
    },
    // resultError(state, action: PayloadAction<MonitoringErrorType>) {
    //   state.error = action.payload;
    //   state.loading = false;
    // },
  },
});

export const { actions, reducer } = slice;

export const useMonitoringSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: monitoringSaga });
  return { actions: slice.actions };
};
