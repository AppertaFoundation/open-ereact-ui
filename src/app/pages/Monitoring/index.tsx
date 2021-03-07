import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { BottomBar, Button, Tabs, TabPanelWrapper } from 'components';
import Header from './Header';
import { useStyles } from './styles';

export function Monitoring() {
  const history = useHistory();
  const classes = useStyles();

  const goBack = () => console.log('lol');
  return (
    <>
      <Helmet>
        <title>Monitoring</title>
        <meta name="description" content="Monitoring" />
      </Helmet>
      <Header />
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
                <input />
              </TabPanelWrapper>
              <TabPanelWrapper label="C">
                <p>Item Two</p>
              </TabPanelWrapper>
              <TabPanelWrapper label="D + E">Item Three</TabPanelWrapper>
            </Tabs>
          </Box>
        </Box>
      )}
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
