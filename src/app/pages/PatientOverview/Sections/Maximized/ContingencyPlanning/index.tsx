import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { useOverviewSlice } from '../../../slice';
import { selectContingencyPlanning } from '../../../selectors';
import Header from 'app/pages/Patient/Header';
import Patient from 'app/pages/Patient';
import { useStyles } from '../../../styles';

export function ContingencyPlanning() {
  const { actions } = useOverviewSlice();

  const classes = useStyles();
  const dispatch = useDispatch();

  const contingencyPlanning = useSelector(selectContingencyPlanning);

  React.useEffect(() => {
    dispatch(actions.loadContingencyPlanning());
  }, [actions, dispatch]);
  return (
    <>
      <Helmet>
        <title>Patient Situation Awareness and Planning</title>
        <meta
          name="description"
          content="Patient Situation Awareness and Planning"
        />
      </Helmet>
      <Header
        title={'Patient Situation Awareness and Planning'}
        returnTo="/patient-overview/"
      />
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
          <Box className={classes.section}>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ padding: '15px' }}
            >
              <Grid item xs={12}>
                <Box m={2}>
                  <Typography
                    gutterBottom
                    align="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    Independent Living & Escalation Asessments
                  </Typography>
                  {contingencyPlanning?.escalationAssessments &&
                    contingencyPlanning.escalationAssessments.map(field => (
                      <Typography gutterBottom align="center">
                        {field}
                      </Typography>
                    ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* <Box width="100%" height="100%">
            <Grid
              container
              justify="center"
              direction="row"
              // className={classes.section}
            >
              <Grid item xs={12}>
                <Box width="100%" m={2}>
                  <Typography
                    gutterBottom
                    align="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    Presenting Complaint & Problems
                  </Typography>
                  {situationBackground?.presentProblems &&
                    situationBackground.presentProblems.map(field => (
                      <Typography gutterBottom align="center">
                        {field}
                      </Typography>
                    ))}
                </Box>
              </Grid>

              <Divider />
              <Grid item xs={12}>
                <Box width="100%" m={2}>
                  <Typography
                    gutterBottom
                    align="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    Past Medical & Drug History{' '}
                  </Typography>
                  {situationBackground?.drugHistory &&
                    situationBackground.drugHistory.map(field => (
                      <Typography gutterBottom align="center">
                        {field}
                      </Typography>
                    ))}
                </Box>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Box width="100%" m={2}>
                  <Typography
                    gutterBottom
                    align="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    Procedures & Progress{' '}
                  </Typography>
                  {situationBackground?.procedures &&
                    situationBackground.procedures.map(field => (
                      <Typography gutterBottom align="center">
                        {field}
                      </Typography>
                    ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        */}
        </Box>
      </div>
    </>
  );
}
