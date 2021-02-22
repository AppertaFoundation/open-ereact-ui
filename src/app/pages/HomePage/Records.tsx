import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { usePatientListSlice } from './slice';
import {
  // selectLoading,
  // selectError,
  selectPatientList,
  selectFilters,
} from './selectors';
import { Box, List, Toolbar, Grid, Typography } from '@material-ui/core';
import { Card, Record, Search, SortPoper } from 'components';
import Sort from './SortContainer';
import SearchByQuery from './SearchByQuery/index';
import { useStyles } from './styles';
import uniqid from 'uniqid';

const Records = () => {
  const classes = useStyles();

  const ref = React.useRef(null);

  const { actions } = usePatientListSlice();
  const dispatch = useDispatch();

  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const patients = useSelector(selectPatientList);
  const filters = useSelector(selectFilters);

  React.useEffect(() => {
    dispatch(actions.loadPatientList(filters));
  }, [actions, dispatch, filters]);

  const searchOptions = patients
    ? (patients as any).map(({ nhsnumber, name, birthDate }) => ({
        nhsnumber,
        name,
        birthDate,
      }))
    : [];

  const handleSortFilter = React.useCallback(
    filters => {
      dispatch(actions.addFilters(filters));
      dispatch(actions.loadPatientList(filters));
    },
    [actions, dispatch],
  );

  return (
    <>
      <div className={classes.fixed} ref={ref}>
        <Toolbar>
          <Grid
            direction="row"
            alignItems="center"
            justify={'flex-end'}
            container
          >
            <Grid item xs={7} sm={9} md={10}>
              <Search options={searchOptions} />
            </Grid>

            <Grid item xs={5} sm={3} md={1}>
              <SearchByQuery />

              <SortPoper>
                <Sort
                  onFilterSort={handleSortFilter}
                  defaultValues={filters}
                  sort
                />
              </SortPoper>
            </Grid>
          </Grid>
        </Toolbar>
      </div>

      <Box m={1} mb={8} style={{ marginTop: '50px' }}>
        {patients?.length > 0 ? (
          <>
            <List>
              {patients.map(
                ({
                  name,
                  nhsnumber,
                  admitted,
                  discharge,
                  consultant,
                  birthDate,
                  gender,
                  location,
                  news2,
                  id,
                }) => (
                  <Box key={uniqid()}>
                    <Card
                      name={name}
                      identifier={nhsnumber}
                      news2={news2}
                      id={id}
                    >
                      <Record
                        birthDate={birthDate}
                        gender={gender}
                        location={location}
                        consultant={consultant}
                        discharge={discharge}
                        admitted={admitted}
                      />
                    </Card>
                  </Box>
                ),
              )}
            </List>
          </>
        ) : (
          <Typography>There are no such records.</Typography>
        )}
      </Box>
    </>
  );
};
export default Records;
