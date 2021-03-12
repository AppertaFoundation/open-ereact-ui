import { put, takeLatest, delay } from 'redux-saga/effects';
import { actions } from './slice';
import { getPatientListFormatter } from 'utils/formatters/patient';
import { PATIENT_LIST } from 'utils/fake';

export function* getPatient(action) {
  yield delay(500);

  const formatedPatientList = getPatientListFormatter(PATIENT_LIST);
  const patient = formatedPatientList.find(
    element => element.id === action.payload,
  );
  yield put(actions.patientLoaded(patient));
}

/**
 * Root saga manages watcher lifecycle
 */
export function* patientSaga() {
  yield takeLatest(actions.loadPatient.type, getPatient);
}
