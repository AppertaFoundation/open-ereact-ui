import React from 'react';
import { useHistory } from 'react-router';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { Carousel } from 'components';
import { CarouselCard } from './SituationBackground';
import { selectContingencyPlanning } from '../../selectors';

const ContingencyPlanning = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints?.up('md'));
  const history = useHistory();

  const contingencyPlanning = useSelector(selectContingencyPlanning);

  const maximize = () =>
    history.push(`${history?.location?.pathname}/contingency-planning`);
  return (
    <Carousel>
      {md
        ? [
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              key={uniqid()}
            >
              {contingencyPlanning?.escalationAssessments && (
                <Grid item lg={4} xs={12}>
                  <CarouselCard
                    onClick={maximize}
                    title="Independent Living & Escalation Asessments"
                    fields={contingencyPlanning.escalationAssessments}
                  />
                </Grid>
              )}
            </Grid>,
          ]
        : [
            <CarouselCard
              key={uniqid()}
              onClick={maximize}
              title="Independent Living & Escalation Asessments"
              fields={contingencyPlanning?.escalationAssessments || []}
            />,
          ]}
    </Carousel>
  );
};

export default ContingencyPlanning;
