import React from 'react';
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  FormLabel,
} from '@material-ui/core';
import { ErrorMsg, RadioGroup, NativeSelect } from 'components';

const AB = ({ register, errors, control, watch }) => {
  const [airOrOxygen, setAirOrOxygen] = React.useState<boolean>(false);

  const useEffectOnAirOrOxygenChange = (effect: React.EffectCallback) => {
    React.useEffect(effect, [watch('inspiredOxygen.methodOfOxygenDelivery')]);
  };
  useEffectOnAirOrOxygenChange(() => {
    const value = watch('inspiredOxygen.methodOfOxygenDelivery');
    if (value) {
      setAirOrOxygen(value !== 'Room Air');
    } else {
      setAirOrOxygen(false);
    }
  });
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

        {errors && (
          <ErrorMsg name={'respiration_rate.magnitude'} errors={errors} />
        )}
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
        {errors && <ErrorMsg name={'spo2'} errors={errors} />}
      </Grid>
      <Grid item md={12}>
        <NativeSelect
          id="o2-delivery-select"
          // disabled={disabled}
          options={[
            { value: 'Room Air', label: 'Room Air' },

            { value: 'Mask', label: 'Mask' },
            { value: 'Nasal Prong', label: 'Nasal Prong' },
            { value: 'NIV', label: 'NIV' },
          ]}
          label="o2 Delivery"
          name={'inspiredOxygen.methodOfOxygenDelivery'}
          control={control}
          // defaultValue={news2Default?.inspiredOxygen?.methodOfOxygenDelivery}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
        />
        {errors && (
          <ErrorMsg
            name={'inspiredOxygen.methodOfOxygenDelivery'}
            errors={errors}
          />
        )}
      </Grid>
      {airOrOxygen && (
        <Grid item md={12}>
          <TextField
            // disabled={disabled}
            variant="outlined"
            label="Flow Rate"
            name="inspiredOxygen.flowRate.magnitude"
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
                value: 1,
                message: 'Flow Rate should be between 1- 12',
              },
              max: {
                value: 12,
                message: 'Flow Rate should be between 1- 12',
              },
            })}
          />
          <input
            type="hidden"
            ref={register}
            name="inspiredOxygen.flowRate.units"
            value="l/min"
          />
          {errors && (
            <ErrorMsg
              name={'inspiredOxygen.flowRate.magnitude'}
              errors={errors}
            />
          )}
        </Grid>
      )}
      {/* <Grid item md={12}>
        <RadioGroup
          disabled={true}
          name="suplementalO2"
          label="Supplemental O₂"
          errors={errors}
          defaultValue={'yes'}
          register={register({
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          values={O2_DELIVERY}
        />
      </Grid>
      {true && (
        <>
          <Grid item md={12}>
            <Box mb={1}>
              <FormLabel component="legend">Respirations</FormLabel>
            </Box>
            <TextField
              // disabled={disabled}
              variant="outlined"
              label="Respiration Rate"
              name="flow_rate.magnitude"
              type="number"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Bpm</InputAdornment>
                ),
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

            {errors && (
              <ErrorMsg name={'respiration_rate.magnitude'} errors={errors} />
            )}
          </Grid>
        </>
      )} */}
    </Grid>
  );
};

export default AB;
