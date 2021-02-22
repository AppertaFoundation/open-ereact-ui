import React from 'react';
import { DialogActions as MuiDialogActions } from '@material-ui/core';

import { withStyles, Theme } from '@material-ui/core/styles';

const Component = withStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      padding: '24px',
    },
  },
}))(MuiDialogActions);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const DialogActions: React.FC<Props> = ({ children }) => (
  <Component>{children}</Component>
);

export default DialogActions;
