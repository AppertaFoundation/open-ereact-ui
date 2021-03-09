/* --- STATE --- */
export interface MonitoringState {
  loading: boolean;
  error?: MonitoringErrorType | null;
  result: any | null;
}

export enum MonitoringErrorType {
  RESPONSE_ERROR = 1,
}

export type ContainerState = MonitoringState;
