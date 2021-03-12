/* --- STATE --- */
interface SituationBackground {
  presentProblems?: string[];
  drugHistory?: string[];
  procedures?: string[];
}
interface ContingencyPlanning {
  escalationAssessments?: string[];
}
export interface OverviewState {
  loading: boolean;
  error?: OverviewErrorType | null;
  situationIlnessStatment: any | null;
  update: {
    pending: boolean;
    success: boolean;
    error: null | OverviewErrorType;
  };
  situationBackground?: SituationBackground;
  contingencyPlanning?: ContingencyPlanning;
}

export enum OverviewErrorType {
  RESPONSE_ERROR = 1,
}

export type ContainerState = OverviewState;
