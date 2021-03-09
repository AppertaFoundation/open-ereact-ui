import { IPatient } from 'types/PatientList';

/* --- STATE --- */
export interface PatientState {
  loading: boolean;
  error?: PatientErrorType | null;
  patient: IPatient | null;
}

export enum PatientErrorType {
  RESPONSE_ERROR = 1,
  NO_PATIENT = 2,
}

export type ContainerState = PatientState;
