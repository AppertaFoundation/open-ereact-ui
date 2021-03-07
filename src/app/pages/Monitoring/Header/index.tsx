import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SubPageTopBar } from 'components';
import {
  IconButton,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useParams } from 'react-router-dom';

import { selectName, selectNHS } from '../Patient/selectors';
import { usePatientSlice } from '../Patient/slice';

const Header = () => {
  const { actions } = usePatientSlice();

  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints?.down('md'));

  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const id = (params as any)?.id;

  const name = useSelector(selectName);
  const identifier = useSelector(selectNHS);

  React.useEffect(() => {
    dispatch(actions.loadPatient(id));
  }, [actions, dispatch, id]);

  const goBack = () => history.go(-1);
  return (
    <SubPageTopBar>
      <IconButton color="inherit" onClick={goBack} edge="start">
        <CloseIcon htmlColor="#000" />
      </IconButton>
      <Box m={1}>
        <Typography variant={downMd ? 'h6' : 'h4'} display="block" noWrap>
          {'Monitoring:'}
        </Typography>
      </Box>

      <Box ml={1}>
        <Typography variant={downMd ? 'body1' : 'h6'} display="block">
          {name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {identifier}
        </Typography>
      </Box>
    </SubPageTopBar>
  );
};

export default Header;
