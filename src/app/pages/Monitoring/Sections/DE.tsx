import React from 'react';
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  FormLabel,
} from '@material-ui/core';
import { RadioGroup } from 'components';

const CONSCIOUSNESS = [
  {
    id: 'at0005',
    value: 'Alert',
  },
  {
    id: 'at0006',
    value: 'Voice',
  },
  {
    id: 'at0015',
    value: 'Confusion',
  },
  {
    id: 'at0007',
    value: 'Pain',
  },
  {
    id: 'at0008',
    value: 'Unresponsive',
  },
];
const tempatureUnit = '\u2103';

const DE = ({ register }) => {
  return (
    <Grid container wrap="nowrap" direction="column" spacing={2}>
      <Grid item md={12}>
        <RadioGroup
          // disabled={disabled}
          name="acvpu.code"
          label="Consciousness"
          //   errors={errors}
          // defaultValue={news2Default?.acvpu?.code}
          register={register({
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          values={CONSCIOUSNESS}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          // disabled={disabled}
          variant="outlined"
          label="Tempature"
          name="temperature.magnitude"
          type="number"
          fullWidth
          inputRef={register({
            required: {
              value: true,
              message: 'This field is required',
            },
            min: {
              value: 27.1,
              message: 'Tempature should be between 27.1- 44.9',
            },
            max: {
              value: 44.9,
              message: 'Tempature should be between 27.1- 44.9',
            },
          })}
          inputProps={{ step: '.01' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">{tempatureUnit}</InputAdornment>
            ),
          }}
        />
        <input
          type="hidden"
          ref={register}
          name="temperature.units"
          value={tempatureUnit}
        />
        {/* {errors && (
                        <ErrorMsg
                          name={'tempature.magnitude'}
                          errors={errors}
                        />
                      )} */}
      </Grid>
    </Grid>
  );
};

export default DE;
