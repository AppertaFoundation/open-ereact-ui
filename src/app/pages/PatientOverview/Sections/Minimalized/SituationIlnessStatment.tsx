import {
  Typography,
  Box,
  Grid,
  DialogContent,
  DialogActions,
  InputBase,
  InputLabel,
} from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { selectSituationIlnessStatment } from '../../selectors';
import { useStyles } from '../../styles';
import { Button, DialogTitle, Dialog } from 'components';
import { useOverviewSlice } from '../../slice';

const SituationIlnessStatment = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { actions } = useOverviewSlice();

  const situationIlnessStatment = useSelector(selectSituationIlnessStatment);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = React.useCallback(
    updatedValue => {
      dispatch(actions.situationIlnessStatment(updatedValue));
      handleClose();
    },
    [actions, dispatch],
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      m={2}
      // className={classes.situationIlness}
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item>
          <Typography>{situationIlnessStatment}</Typography>
        </Grid>
        <Grid item>
          <Button.Primary variant="contained" width={100} onClick={handleOpen}>
            Edit
          </Button.Primary>
        </Grid>
      </Grid>
      <UpdateStatment
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </Box>
  );
};

export default SituationIlnessStatment;

const UpdateStatment: React.FC<{
  open: boolean;
  onClose: any;
  onConfirm: any;
}> = ({ open, onClose, onConfirm }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => onConfirm(data);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="scroll-dialog-title" onClose={onClose}>
        Situation and illness severity statement
      </DialogTitle>
      <DialogContent dividers={true}>
        <form id="update-situation-ilness" onSubmit={handleSubmit(onSubmit)}>
          <InputLabel>Situation</InputLabel>
          <InputBase
            name="situationInessStatment"
            multiline
            rows="5"
            fullWidth
            //   onChange={handleChangeAvaibleCharts}
            inputRef={register}
            placeholder="Please enter patient information at this point to indicate what that patient situation is."
          />{' '}
        </form>
      </DialogContent>
      <DialogActions>
        <Button.Primary onClick={onClose} color="primary">
          Cancel
        </Button.Primary>
        <Button.Secondary
          type="submit"
          variant="contained"
          form="update-situation-ilness"
        >
          Confirm
        </Button.Secondary>
      </DialogActions>
    </Dialog>
  );
};
