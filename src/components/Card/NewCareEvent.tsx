import React from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Typography, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../Button';
import Dialog, { DialogTitle } from '../Dialog';

const useStyles = makeStyles({
  content: { padding: 24 },
});
interface Props {
  open: boolean;
  title?: string;
  id: string;
  identifier: string;
  handleClose: () => void;
}
const NewCareEventDialog: React.FC<Props> = ({
  open,
  handleClose,
  title = '',
  identifier,
  id,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const goToAssessment = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    history.push(`/assessment/${id}`);
  };
  const goToIntervention = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    history.push(`/intervention/${id}`);
  };
  const goToMonitoring = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    history.push(`/monitoring/${id}`);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="title" onClose={handleClose}>
        <Typography component="div" noWrap variant="h5">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {identifier}
        </Typography>
      </DialogTitle>

      <DialogContent className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button.Primary
              onClick={goToAssessment}
              variant="outlined"
              fullWidth
            >
              Assessment
            </Button.Primary>
          </Grid>
          <Grid item xs={12}>
            <Button.Primary
              onClick={goToIntervention}
              variant="outlined"
              fullWidth
            >
              Intervention
            </Button.Primary>
          </Grid>
          <Grid item xs={12}>
            <Button.Primary
              onClick={goToMonitoring}
              variant="outlined"
              fullWidth
            >
              Monitoring
            </Button.Primary>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
export default NewCareEventDialog;
