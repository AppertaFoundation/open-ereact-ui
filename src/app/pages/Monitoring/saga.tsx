import { put, takeLatest, delay } from 'redux-saga/effects';
import { ASSESSMENTS_RESULT } from 'utils/fake';
import { keysToCamel } from 'utils/formatters/keysToCamel';
import { actions } from './slice';

// const getUUID = state => state.patient.patient.id;

// const STATIC = (window as any)[
//   `${process.env.NODE_ENV === 'production' ? 'injectedEnv' : '_env_'}`
// ].REACT_APP_STATIC;

// const REACT_APP_API = (window as any)[
//   `${process.env.NODE_ENV === 'production' ? 'injectedEnv' : '_env_'}`
// ].REACT_APP_API;

export function* makeCalculations(action) {
  yield delay(500);

  // const { obsType, assessmentForm } = action.payload;
  // const uuid = yield select(getUUID);
  const obsType = 'news2';
  console.log('NEWS2 =>', action.payload);
  const now = new Date();

  const result = keysToCamel(ASSESSMENTS_RESULT[`${obsType}`]);
  result[`${obsType}`].lastUpdate = now.toISOString();
  return yield put(
    actions.resultLoaded({
      ...result,
    }),
  );
}

/**
 * Root saga manages watcher lifecycle
 */
export function* monitoringSaga() {
  yield takeLatest(actions.getResult.type, makeCalculations);
  // yield takeLatest(actions.pendingAssessment.type, submitAssessment);
}
