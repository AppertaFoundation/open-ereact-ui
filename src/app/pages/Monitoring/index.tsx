import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  InputLabel,
  TextField,
  Divider,
  Typography,
} from '@material-ui/core';
import {
  BottomBar,
  Button,
  Tabs,
  TabPanelWrapper,
  Card,
  Record,
} from 'components';
import Header from './Header';
import { useStyles } from './styles';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectPatient } from './Patient/selectors';
import { AB, C, DE } from './Sections';
import { Situation } from './ISB';

export function Monitoring() {
  const history = useHistory();
  const classes = useStyles();
  const patient = useSelector(selectPatient);
  const { getValues, watch, register, errors, control } = useForm();

  const goBack = () => console.log('lol');

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
            height="100%"
          >
            <Box width="100%" className={classes.isbSection}>
              <Tabs contained={false}>
                <TabPanelWrapper label="IDENTITY">
                  <Card
                    name={patient?.name}
                    identifier={patient?.nhsnumber}
                    news2={patient?.news2}
                    id={patient?.id}
                    className={classes.identityCard}
                  >
                    <Record
                      birthDate={patient?.birthDate}
                      gender={patient?.gender}
                      location={patient?.location}
                      consultant={patient?.consultant}
                      discharge={patient?.discharge}
                      admitted={patient?.admitted}
                    />
                  </Card>
                </TabPanelWrapper>
                <TabPanelWrapper label="SITUATION">
                  <Situation register={register} />
                </TabPanelWrapper>
                <TabPanelWrapper label="BACKGROUND">
                  <Situation register={register} />
                </TabPanelWrapper>
              </Tabs>
            </Box>
            <Box height="100%" mt={1} mb={1} className={classes.section}>
              <Tabs contained resizeDesktop>
                <TabPanelWrapper label="A + B">
                  <AB register={register} />
                </TabPanelWrapper>
                <TabPanelWrapper label="C">
                  <C
                    register={register}
                    bloodPreasureValidate={bloodPreasureValidate}
                  />
                </TabPanelWrapper>
                <TabPanelWrapper label="D + E">
                  <DE register={register} />
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
