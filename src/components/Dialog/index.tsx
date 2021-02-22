import React from 'react';
import { Dialog as MuiDialog } from '@material-ui/core';
import { withStyles, useTheme, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DialogTitle from './DialogTitle';
import DialogAction from './DialogAction';

const Component = withStyles((theme: Theme) => ({
  paper: {
    [theme.breakpoints.up('sm')]: {
      borderRadius: '35px',
      padding: '15px',
    },
  },
}))(MuiDialog);

interface Props {
  children: React.ReactNode | React.ReactNode[];
  open: boolean;
  onClose: any;
}

const Dialog: React.FC<Props> = ({ children, onClose, open }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Component
      fullScreen={fullScreen}
      fullWidth
      maxWidth={'sm'}
      open={open}
      keepMounted
      onClose={onClose}
    >
      {children}
    </Component>
  );
};

export default Dialog;
export { DialogTitle, DialogAction };
