import React from 'react';
import { FormLabel, Box, Grid } from '@material-ui/core';
import { Button, Text } from 'components';
import CouldBeSepsis from './News-Just-Ask.jpg';
import { useStyles } from '../styles';

const SepsisScreening = () => {
  const classes = useStyles();
  return (
    <Grid md={6} item>
      <Box m={2}>
        <FormLabel component="legend">Sepsis Screening</FormLabel>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        m={2}
        className={classes.sepsisScreening}
      >
        <Box width={2 / 3}>
          <Box mb={1}>
            <FormLabel component="legend">Last sepsis screening</FormLabel>
          </Box>

          <Text label="Time">HH:MM</Text>
          <Text label="Date">DD-mmm-YY</Text>
          <Text label="Status">Red Flags detected</Text>
        </Box>
        <Box width={1 / 3}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <img width="110px" src={CouldBeSepsis} />
            </Grid>
            <Grid item>
              <Button.Secondary variant="contained">
                Screen again
              </Button.Secondary>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SepsisScreening;
