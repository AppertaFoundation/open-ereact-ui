import React from 'react';
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  FormLabel,
} from '@material-ui/core';
import { ErrorMsg } from 'components';

const C = ({ register, bloodPreasureValidate, errors }) => {
  return (
    <Grid container wrap="nowrap" direction="column" spacing={2}>
      <Grid item md={12}>
        <Box mb={1}>
          <FormLabel component="legend">Blood Pressure</FormLabel>
        </Box>
        <Grid container wrap="nowrap" direction="row" spacing={2}>
          <Grid item>
            <TextField
              // disabled={disabled}
              variant="outlined"
              label="Systolic"
              name="systolic.magnitude"
              fullWidth
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mmHg</InputAdornment>
                ),
              }}
              inputRef={register({
                required: {
                  value: true,
                  message: 'This field is required',
                },
                min: {
                  value: 1,
                  message: 'Systolic pressure should be between 1- 300',
                },
                max: {
                  value: 300,
                  message: 'Systolic pressure should be between 1- 300',
                },
                validate: bloodPreasureValidate,
              })}
            />
            <input
              type="hidden"
              ref={register}
              name="systolic.units"
              value="/mmHg"
            />
            {errors && <ErrorMsg name={'systolic.magnitude'} errors={errors} />}
          </Grid>
          <Grid item>
            <TextField
              // disabled={disabled}
              variant="outlined"
              label="Diastolic"
              name="diastolic.magnitude"
              fullWidth
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mmHg</InputAdornment>
                ),
              }}
              inputRef={register({
                required: {
                  value: true,
                  message: 'This field is required',
                },
                min: {
                  value: 1,
                  message: 'Diastolic pressure should be between 1- 300',
                },
                max: {
                  value: 280,
                  message: 'Diastolic pressure should be between 1- 300',
                },
                validate: bloodPreasureValidate,
              })}
            />
            <input
              type="hidden"
              ref={register}
              name="diastolic.units"
              value="/mmHg"
            />
            {errors && (
              <ErrorMsg name={'diastolic.magnitude'} errors={errors} />
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <TextField
          // disabled={disabled}
          variant="outlined"
          label="Pulse Rate"
          name="pulse.magnitude"
          type="number"
          fullWidth
          inputRef={register({
            required: {
              value: true,
              message: 'This field is required',
            },
            min: {
              value: 1,
              message: 'Pulse Rate should be between 1- 250',
            },
            max: {
              value: 250,
              message: 'Pulse Rate should be between 1- 250',
            },
          })}
          InputProps={{
            endAdornment: <InputAdornment position="end">/min</InputAdornment>,
          }}
        />
        <input type="hidden" ref={register} name="pulse.units" value="/min" />
        {errors && <ErrorMsg name={'pulse.magnitude'} errors={errors} />}
      </Grid>
    </Grid>
  );
};

export default C;
