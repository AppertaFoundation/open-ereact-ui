import React from 'react';
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  FormLabel,
} from '@material-ui/core';

const AB = ({ register }) => {
  return (
    <Grid container wrap="nowrap" direction="column" spacing={2}>
      <Grid item md={12}>
        <Box mb={1}>
          <FormLabel component="legend">Respirations</FormLabel>
        </Box>
        <TextField
          // disabled={disabled}
          variant="outlined"
          label="Respiration Rate"
          name="respiration_rate.magnitude"
          type="number"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">Bpm</InputAdornment>,
          }}
          inputRef={register({
            required: {
              value: true,
              message: 'This field is required',
            },
            min: {
              value: 1,
              message: 'Respiration Rate should be between 1- 59',
            },
            max: {
              value: 59,
              message: 'Respiration Rate should be between 1- 59',
            },
          })}
        />
        <input
          type="hidden"
          ref={register}
          name="respiration_rate.units"
          value="/min"
        />

        {/* {errors && (
        <ErrorMsg
          name={'respiration_rate.magnitude'}
          errors={errors}
        />
      )} */}
      </Grid>

      <Grid item md={12}>
        <TextField
          // disabled={disabled}
          variant="outlined"
          label={'Oxygen Saturation- Scale 1'}
          name="spo2"
          fullWidth
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          inputRef={register({
            required: {
              value: true,
              message: 'This field is required',
            },
            min: {
              value: 51,
              message: 'Oxygen Saturation should be between 51- 100',
            },
            max: {
              value: 100,
              message: 'Oxygen Saturation should be between 51- 100',
            },
          })}
        />
        {/* {errors && <ErrorMsg name={'spo2'} errors={errors} />} */}
      </Grid>
    </Grid>
  );
};

export default AB;
