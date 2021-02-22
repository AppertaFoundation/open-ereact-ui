import { put, takeLatest, delay } from 'redux-saga/effects';
import { actions } from './slice';
import { getPatientListFormatter } from 'utils/formatters/patient';
import { PATIENT_LIST, sort } from 'utils/fake';

export function* getPatientList(action) {
  yield delay(500);

  const formatedPatientList = getPatientListFormatter(PATIENT_LIST);

  const sorted = sort(formatedPatientList, action.payload?.sort);
  yield put(actions.patientListLoaded(sorted));

  // try {
  //   const patients = yield call(request, URL);
  //   if (Object.keys(patients).length > 0) {
  //     const formatedPatientList = getPatients(patients);

  //     yield put(actions.patientListLoaded(formatedPatientList));
  //   } else {
  //     yield put(actions.patientListError(PatientListErrorType.NO_FIXTURE));
  //   }
  // } catch (err) {
  //   console.log(err);
  //   if (err.response?.status === 404) {
  //     yield put(actions.patientListError(PatientListErrorType.RESPONSE_ERROR));
  //   }
  // }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* patientListSaga() {
  yield takeLatest(actions.loadPatientList.type, getPatientList);
}
