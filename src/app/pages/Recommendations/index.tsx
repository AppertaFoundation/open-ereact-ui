import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, FormLabel, Grid } from '@material-ui/core';
import Header from '../Monitoring/Header';
import Patient from '../Monitoring/Patient';
import { SepsisScreening, Diagnosis, AimPlan } from './Sections';

import { useStyles } from './styles';

export function Recommendations() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Patient Recommendations</title>
        <meta name="description" content="A Patient Recommendations" />
      </Helmet>
      <Header title={'Recommendations'} />
      <div className={classes.fullWidth}>
        <Box
          display="flex"
          flexWrap="nowrap"
          flexDirection="column"
          css={{ maxWidth: '100%' }}
          height="100%"
        >
          <Box width="100%">
            <Patient />
          </Box>
          <Box width="100%">
            <Grid
              container
              justify="center"
              className={classes.section}
              direction="row"
            >
              <Grid item xs={12}>
                <SepsisScreening />
              </Grid>
              <Grid item xs={12}>
                <Diagnosis />
              </Grid>
              <Grid item xs={12}>
                <AimPlan />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
