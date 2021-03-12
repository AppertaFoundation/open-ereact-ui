import { lazyLoad } from 'utils/loadable';

export const PatientOveriview = lazyLoad(
  () => import('./index'),
  module => module.PatientOveriview,
);
