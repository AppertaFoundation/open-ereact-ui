import React from 'react';
import { DialogContent, DialogActions } from '@material-ui/core';
import { Button, Dialog, DialogTitle } from 'components';
import { News2Summary } from './News2Summary';

const Summary: React.FC<{
  open: boolean;
  onClose: any;
  onConfirm: any;
}> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="scroll-dialog-title" onClose={onClose}>
        PATIENT MONITORING SUMMARY
      </DialogTitle>
      <DialogContent dividers={true}>
        <News2Summary />
      </DialogContent>
      <DialogActions>
        <Button.Primary onClick={onClose} color="primary">
          Cancel
        </Button.Primary>
        <Button.Secondary
          onClick={onConfirm}
          variant="contained"
          //   disabled={Boolean(error)}
        >
          Confirm
        </Button.Secondary>
      </DialogActions>
    </Dialog>
  );
};

export default Summary;
