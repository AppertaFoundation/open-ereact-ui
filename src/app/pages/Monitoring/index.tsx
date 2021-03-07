import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { BottomBar, Button, Tabs, TabPanelWrapper } from 'components';
import Header from './Header';
import { useStyles } from './styles';
import { useForm } from 'react-hook-form';
import { AB, C, DE } from './Sections';

export function Monitoring() {
  const history = useHistory();
  const classes = useStyles();

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
            <Box width="100%"></Box>
            <Box height="100%" mt={1} mb={1} className={classes.section}>
              <Tabs>
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
