/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Monitoring = lazyLoad(
  () => import('./index'),
  module => module.Monitoring,
);
