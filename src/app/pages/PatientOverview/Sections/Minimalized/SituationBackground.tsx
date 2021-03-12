import React from 'react';
import {
  Grid,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { Carousel, Button } from 'components';
import { useHistory } from 'react-router';
import { selectSituationBackground } from '../../selectors';

export const CarouselCard = ({ title, fields, onClick }) => {
  const firstTwo = fields
    ? fields.filter((field, index) => index === 0 || index === 1)
    : [];
  return (
    <>
      <Box width="100%" mr={1} ml={1}>
        <Typography
          gutterBottom
          align="center"
          variant="subtitle1"
          color="textSecondary"
        >
          {title}
        </Typography>
        {firstTwo ? (
          firstTwo.map(field => (
            <Typography gutterBottom align="center" noWrap key={uniqid()}>
              {field}
            </Typography>
          ))
        ) : (
          <Typography gutterBottom align="center">
            No data avaible
          </Typography>
        )}
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        <Button.Secondary onClick={onClick} disabled={Boolean(!fields)}>
          Show more
        </Button.Secondary>
      </Box>
    </>
  );
};

const SitutationBackground = () => {
  // const { actions } = useOverviewSlice();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints?.up('md'));
  const history = useHistory();
  // const dispatch = useDispatch();

  const situationBackground = useSelector(selectSituationBackground);

  // React.useEffect(() => {
  //   dispatch(actions.loadSituationBackgrond());
  // }, [actions, dispatch]);

  const maximize = () =>
    history.push(`${history?.location?.pathname}/situation-background`);

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
              {situationBackground?.presentProblems && (
                <Grid item lg={4} xs={12}>
                  <CarouselCard
                    onClick={maximize}
                    title="Presenting Complaint & Problems"
                    fields={situationBackground.presentProblems}
                  />
                </Grid>
              )}
              {situationBackground?.drugHistory && (
                <Grid item lg={4} xs={12}>
                  <CarouselCard
                    onClick={maximize}
                    title="Past Medical & Drug History"
                    fields={situationBackground.drugHistory}
                  />
                </Grid>
              )}
              {situationBackground?.procedures && (
                <Grid item lg={4} xs={12}>
                  <CarouselCard
                    onClick={maximize}
                    title="Procedures & Progress"
                    fields={situationBackground.procedures}
                  />
                </Grid>
              )}
            </Grid>,
          ]
        : [
            <CarouselCard
              onClick={maximize}
              title="Presenting Complaint & Problems"
              fields={situationBackground?.presentProblems}
              key={uniqid()}
            />,
            <CarouselCard
              onClick={maximize}
              title="Past Medical & Drug History"
              fields={situationBackground?.drugHistory}
              key={uniqid()}
            />,
            <CarouselCard
              onClick={maximize}
              title="Procedures & Progress"
              fields={situationBackground?.procedures}
              key={uniqid()}
            />,
          ]}
    </Carousel>
  );
};

export default SitutationBackground;
