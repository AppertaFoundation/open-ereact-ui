import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Records from './Records';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Patient List</title>
        <meta name="description" content="A List of Patient" />
      </Helmet>
      <Records />
    </>
  );
}
