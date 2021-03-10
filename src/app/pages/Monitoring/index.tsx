import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Box } from '@material-ui/core';
import { BottomBar, Button, Tabs, TabPanelWrapper } from 'components';
import Header from './Header';
import { useStyles } from './styles';
import { useForm } from 'react-hook-form';
import { useMonitoringSlice } from './slice';
import { AB, C, DE } from './Sections';
import { Situation, Background, Identity } from './ISB';
import Summary from './Summary';
import { selectId } from './Patient/selectors';

export function Monitoring() {
  const classes = useStyles();
  const {
    getValues,
    control,
    register,
    errors,
    handleSubmit,
    watch,
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const { actions } = useMonitoringSlice();
  const [, setCheckedTask] = React.useState({});

  const [open, setOpen] = React.useState(false);

  const id = useSelector(selectId);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const bloodPreasureValidate = React.useCallback(
    type => {
      const systolic = getValues('systolic.magnitude');
      const diastolic = getValues('diastolic.magnitude');
      if (systolic && diastolic) {
        if (parseInt(systolic) > parseInt(diastolic)) {
          return true;
        } else {
          return 'Systolic pressure must be higher than diastolic pressure';
        }
      } else return true;
    },
    [getValues],
  );
  const onSubmit = data => {
    dispatch(actions.getResult(data));
    handleOpen();
  };

  const handleEdit = React.useCallback(checked => {
    setCheckedTask(checked);
  }, []);

  const handleConfirm = React.useCallback(
    checked => {
      handleClose();
      history.push(`/recommendations/${id}`);
    },
    [history, id],
  );

  return (
    <>
      <Helmet>
        <title>Monitoring</title>
        <meta name="description" content="Monitoring" />
      </Helmet>
      <Header title="Monitoring" isMonitoring onEdit={handleEdit} />
      <form
        className={classes.fullWidth}
        id={`monitoring-isba`}
        onSubmit={handleSubmit(onSubmit)}
      >
        {true && (
          <Box
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
            css={{ maxWidth: '100%' }}
            height="100%"
          >
            <Box width="100%">
              <Tabs contained={false}>
                <TabPanelWrapper id="identity" label="IDENTITY">
                  <Identity />
                </TabPanelWrapper>
                <TabPanelWrapper id="situation" label="SITUATION">
                  <Situation register={register} />
                </TabPanelWrapper>
                <TabPanelWrapper id="background" label="BACKGROUND">
                  <Background register={register} />
                </TabPanelWrapper>
              </Tabs>
            </Box>
            <Box height="100%" mt={1} mb={1}>
              <Tabs className={classes.section} contained resizeDesktop>
                <TabPanelWrapper
                  id={'news2-ab'}
                  className={classes.section}
                  label="A + B"
                >
                  <AB
                    register={register}
                    errors={errors}
                    control={control}
                    watch={watch}
                  />
                </TabPanelWrapper>
                <TabPanelWrapper
                  id={'news2-c'}
                  className={classes.section}
                  label="C"
                >
                  <C
                    register={register}
                    bloodPreasureValidate={bloodPreasureValidate}
                    errors={errors}
                  />
                </TabPanelWrapper>
                <TabPanelWrapper
                  id={'news2-de'}
                  className={classes.section}
                  label="D + E"
                >
                  <DE register={register} errors={errors} />
                </TabPanelWrapper>
              </Tabs>
            </Box>
          </Box>
        )}
      </form>
      {open && (
        <Summary open={open} onClose={handleClose} onConfirm={handleConfirm} />
      )}
      <BottomBar>
        <Button.Secondary
          form={`monitoring-isba`}
          variant="contained"
          type="submit"
        >
          Finish Observation
        </Button.Secondary>
      </BottomBar>
    </>
  );
}
