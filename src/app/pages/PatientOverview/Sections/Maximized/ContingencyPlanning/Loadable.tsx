import { lazyLoad } from 'utils/loadable';

export const ContingencyPlanning = lazyLoad(
  () => import('./index'),
  module => module.ContingencyPlanning,
);
