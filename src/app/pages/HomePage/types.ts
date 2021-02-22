import { IPatient } from 'types/PatientList';

/* --- STATE --- */
export interface PatientListState {
  loading: boolean;
  error?: PatientListErrorType | null;
  patientList: IPatient[] | [];
  filters: { sort: null | any };
}

export enum PatientListErrorType {
  RESPONSE_ERROR = 1,
  NO_FIXTURE = 2,
}

export type ContainerState = PatientListState;
