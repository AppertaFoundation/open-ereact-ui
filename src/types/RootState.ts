import { ThemeState } from 'styles/theme/slice/types';
import { PatientListState } from 'app/pages/HomePage/types';
export interface RootState {
  theme?: ThemeState;
  patientList?: PatientListState;
}
