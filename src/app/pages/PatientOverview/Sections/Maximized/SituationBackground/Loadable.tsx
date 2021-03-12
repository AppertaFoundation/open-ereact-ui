import { lazyLoad } from 'utils/loadable';

export const SituationBackground = lazyLoad(
  () => import('./index'),
  module => module.SituationBackground,
);
