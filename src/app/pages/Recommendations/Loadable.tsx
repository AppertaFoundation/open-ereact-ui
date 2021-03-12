import { lazyLoad } from 'utils/loadable';

export const Recommendations = lazyLoad(
  () => import('./index'),
  module => module.Recommendations,
);
