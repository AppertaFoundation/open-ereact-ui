import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Grid } from '@material-ui/core';
import Header from '../Patient/Header';
import Sections from './Sections/Minimalized';

import { useStyles } from './styles';

export function PatientOveriview() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Patient Summary</title>
        <meta name="description" content="A Patient Summary" />
      </Helmet>
      <Header title={'Patient Summary'} />
      <Sections />
      {/* <div className={classes.fullWidth}>
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
                <SituationIlnessStatment />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Box>
        </Box>
      </div> */}
    </>
  );
}
