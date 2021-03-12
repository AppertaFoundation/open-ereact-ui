import { put, takeLatest, delay } from 'redux-saga/effects';

import { actions } from './slice';

// const getUUID = state => state.patient.patient.id;

// const STATIC = (window as any)[
//   `${process.env.NODE_ENV === 'production' ? 'injectedEnv' : '_env_'}`
// ].REACT_APP_STATIC;

// const REACT_APP_API = (window as any)[
//   `${process.env.NODE_ENV === 'production' ? 'injectedEnv' : '_env_'}`
// ].REACT_APP_API;

export function* updateSituationIlnessStatment(action) {
  yield delay(500);

  yield put(actions.situationIlnessStatment(action.payload));
  return yield put(actions.success());
}

export function* getSituationBackgorund() {
  yield delay(500);
  return yield put(
    actions.situationBackgorundLoaded({
      presentProblems: [
        'Abdominal Pain',
        'Small bowel obstruction',
        'Dehydration',
      ],
      drugHistory: [
        'Hypertension; COPD; Type II Diabetes',
        'Ramipril 5mg PO OD; Bendroflumethiazide 2.5mg PO OD; Aspirin 75mg PO OD; Metformin 500mg PO BD; Symbicort 200/6 II Inh BD; Piperacillin/Tazobactam 4.5g TV TID',
      ],
      procedures: [
        'CT Abdomen & pelvis; Laparotomy; NG tube inserted',
        'Perforation and faecal contamination found at laparoomty;unable to tolerate any oral intake post op, persistent pain, not mobilising',
      ],
    }),
  );
}
export function* getContingencyPlanning() {
  yield delay(500);
  return yield put(
    actions.contingencyPlanningLoaded({
      escalationAssessments: ['Impaired exercise capacity', 'Severe frailty'],
    }),
  );
}
/**
 * Root saga manages watcher lifecycle
 */
export function* overviewSaga() {
  yield takeLatest(
    actions.situationIlnessStatment.type,
    updateSituationIlnessStatment,
  );
  yield takeLatest(actions.loadSituationBackgrond.type, getSituationBackgorund);
  yield takeLatest(
    actions.loadContingencyPlanning.type,
    getContingencyPlanning,
  );
}
