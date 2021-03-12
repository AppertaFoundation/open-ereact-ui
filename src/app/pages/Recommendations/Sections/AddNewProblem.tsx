import React from 'react';
import {
  DialogContent,
  DialogActions,
  TextField,
  Grid,
} from '@material-ui/core';
import { Button, Dialog, DialogTitle } from 'components';
import { useForm } from 'react-hook-form';

const AddNewProblem: React.FC<{
  open: boolean;
  onClose: any;
  onConfirm: any;
}> = ({ open, onClose, onConfirm }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
    console.log(data, 's');

    onConfirm(data);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="scroll-dialog-title" onClose={onClose}>
        PATIENT MONITORING SUMMARY
      </DialogTitle>
      <DialogContent dividers={true} style={{ minHeight: '200px' }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="add-problem-recommendations"
        >
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                variant="outlined"
                label="Diagnosis"
                name="diagnosis"
                inputRef={register}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="Certainty"
                name="certainty"
                inputRef={register}
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button.Primary onClick={onClose} color="primary">
          Cancel
        </Button.Primary>
        <Button.Secondary
          form={'add-problem-recommendations'}
          variant="contained"
          type="submit"
        >
          Confirm
        </Button.Secondary>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewProblem;
