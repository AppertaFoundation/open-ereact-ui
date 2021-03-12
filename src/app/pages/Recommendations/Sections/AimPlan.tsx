import React from 'react';
import { FormLabel, Box } from '@material-ui/core';
import { Tabs, TabPanelWrapper } from 'components';
import { useStyles } from '../styles';
const AimPlan = () => {
  const classes = useStyles();
  return (
    <>
      <Box m={2}>
        <FormLabel component="legend">AIM Plan</FormLabel>
      </Box>
      <Box
        display="flex"
        flexWrap="nowrap"
        flexDirection="column"
        css={{ maxWidth: '100%' }}
        height="100%"
      >
        <Box width="100%">
          <Tabs contained resizeDesktop className={classes.section}>
            <TabPanelWrapper
              className={classes.section}
              id="identity"
              label="Assessment"
            >
              Assessment
            </TabPanelWrapper>
            <TabPanelWrapper
              className={classes.section}
              id="situation"
              label="Intervention"
            >
              Intervention
            </TabPanelWrapper>
            <TabPanelWrapper
              className={classes.section}
              id="background"
              label="Monitoring"
            >
              Monitoring
            </TabPanelWrapper>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default AimPlan;
