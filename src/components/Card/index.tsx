import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { IAssessmentIcons } from 'types';

import {
  CardHeader,
  CardActions,
  Box,
  IconButton,
  CardActionArea,
  Divider,
  Typography,
} from '@material-ui/core';
import MuiIconButton from '@material-ui/core/IconButton';
import MuiCardContent from '@material-ui/core/CardContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from './styles';
import clsx from 'clsx';
import Icon from '../Icons';
import Record from './Record';
import NewCareEvent from './NewCareEvent';

const CardContent = withStyles({
  root: {
    paddingTop: 0,
    paddingRight: '16px',
    paddingBottom: '16px',
  },
})(MuiCardContent);

interface Props {
  name?: string;
  identifier?: string;
  id?: string;
  children?: JSX.Element;
  news2?: any;
}

const IconButtonNews2 = withStyles({
  root: {
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 0,
  },
})(MuiIconButton);

const Card: React.FC<Props> = ({ name, identifier, news2, children, id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const history = useHistory();
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const latestResponseBar = news2?.value && (
    <IconButtonNews2
      onClick={() => console.log('denwis')}
      {...(sm ? { size: 'small' } : {})}
    >
      <Icon.News2 news2={news2?.value} />
    </IconButtonNews2>
  );

  const redirectToPatientOverview = () =>
    history.push(`/patient-overview/${id}`);
  return (
    <>
      <Box className={clsx(classes.card, classes.roundedCorners)}>
        <CardHeader
          title={
            <CardActionArea onClick={redirectToPatientOverview}>
              <Typography variant="h5" display="block">
                {name}
              </Typography>
            </CardActionArea>
          }
          subheader={
            <CardActionArea onClick={redirectToPatientOverview}>
              <Typography variant="body1" color="textSecondary">
                {identifier}
              </Typography>
            </CardActionArea>
          }
          action={
            <CardActions disableSpacing>
              {latestResponseBar}
              <Divider orientation="vertical" flexItem />
              <IconButton edge={'end'} onClick={handleOpen}>
                <MoreVertIcon />
              </IconButton>
            </CardActions>
          }
        />
        {children && (
          <CardActionArea onClick={redirectToPatientOverview}>
            <CardContent className={classes.rootContent}>
              {children}
            </CardContent>
          </CardActionArea>
        )}
      </Box>
      {open && (
        <NewCareEvent
          open={open}
          handleClose={handleClose}
          title={name}
          identifier={identifier || ''}
          id={id || ''}
        />
      )}
    </>
  );
};

export default Card;
export { Record };
