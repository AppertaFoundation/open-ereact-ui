import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  FormLabel,
} from '@material-ui/core';
import {
  BottomBar,
  Button,
  Tabs,
  TabPanelWrapper,
  RadioGroup,
} from 'components';
import Header from './Header';
import { useStyles } from './styles';
import { useForm } from 'react-hook-form';

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

export function Monitoring() {
  const history = useHistory();
  const classes = useStyles();

  const { getValues, watch, register, errors, control } = useForm();

  const goBack = () => console.log('lol');

  const bloodPreasureValidate = type => {
    const systolic = getValues('systolic.magnitude');
    const diastolic = getValues('diastolic.magnitude');
    if (systolic && diastolic) {
      if (parseInt(systolic) > parseInt(diastolic)) {
        return true;
      } else {
        return 'Systolic pressure must be higher than diastolic pressure';
      }
    } else return true;
  };
  return (
    <>
      <Helmet>
        <title>Monitoring</title>
        <meta name="description" content="Monitoring" />
      </Helmet>
      <Header />
      <form className={classes.fullWidth}>
        {true && (
          <Box
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
            css={{ maxWidth: '100%' }}
          >
            <Box width="100%"></Box>
            <Box mt={1} mb={1} className={classes.section}>
              <Tabs>
                <TabPanelWrapper label="A + B">
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
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        inputRef={register({
                          required: {
                            value: true,
                            message: 'This field is required',
                          },
                          min: {
                            value: 51,
                            message:
                              'Oxygen Saturation should be between 51- 100',
                          },
                          max: {
                            value: 100,
                            message:
                              'Oxygen Saturation should be between 51- 100',
                          },
                        })}
                      />
                      {/* {errors && <ErrorMsg name={'spo2'} errors={errors} />} */}
                    </Grid>
                  </Grid>
                </TabPanelWrapper>
                <TabPanelWrapper label="C">
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
                                <InputAdornment position="end">
                                  mmHg
                                </InputAdornment>
                              ),
                            }}
                            inputRef={register({
                              required: {
                                value: true,
                                message: 'This field is required',
                              },
                              min: {
                                value: 1,
                                message:
                                  'Systolic pressure should be between 1- 300',
                              },
                              max: {
                                value: 300,
                                message:
                                  'Systolic pressure should be between 1- 300',
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
                          {/* {errors && (
                        <ErrorMsg name={'systolic.magnitude'} errors={errors} />
                      )} */}
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
                                <InputAdornment position="end">
                                  mmHg
                                </InputAdornment>
                              ),
                            }}
                            inputRef={register({
                              required: {
                                value: true,
                                message: 'This field is required',
                              },
                              min: {
                                value: 1,
                                message:
                                  'Diastolic pressure should be between 1- 300',
                              },
                              max: {
                                value: 280,
                                message:
                                  'Diastolic pressure should be between 1- 300',
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
                          {/* {errors && (
                        <ErrorMsg
                          name={'diastolic.magnitude'}
                          errors={errors}
                        />
                      )} */}
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
                          endAdornment: (
                            <InputAdornment position="end">/min</InputAdornment>
                          ),
                        }}
                      />
                      <input
                        type="hidden"
                        ref={register}
                        name="pulse.units"
                        value="/min"
                      />
                      {/* {errors && (
                    <ErrorMsg name={'pulse.magnitude'} errors={errors} />
                  )} */}
                    </Grid>
                  </Grid>
                </TabPanelWrapper>
                <TabPanelWrapper label="D + E">
                  <Grid container wrap="nowrap" direction="column" spacing={2}>
                    <Grid item md={12}>
                      <RadioGroup
                        // disabled={disabled}
                        name="acvpu.code"
                        label="Consciousness"
                        errors={errors}
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
                            <InputAdornment position="end">
                              {tempatureUnit}
                            </InputAdornment>
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
                </TabPanelWrapper>
              </Tabs>
            </Box>
          </Box>
        )}
      </form>

      <BottomBar>
        <Button.Secondary
          variant="contained"
          onClick={() => console.log('lol')}
        >
          Finish Observation
        </Button.Secondary>
      </BottomBar>
    </>
  );
}
