import { ThemeState } from 'styles/theme/slice/types';
import { PatientListState } from 'app/pages/HomePage/types';
import { PatientState } from 'app/pages/Patient/types';
import { MonitoringState } from 'app/pages/Monitoring/types';
import { OverviewState } from 'app/pages/PatientOverview/types';

export interface RootState {
  theme?: ThemeState;
  patientList?: PatientListState;
  patient?: PatientState;
  monitoring?: MonitoringState;
  overview?: OverviewState;
}
