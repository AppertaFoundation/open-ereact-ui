import React from 'react';
import { AppBar as MuiAppBar } from '@material-ui/core';
import { useStyles } from './style';
import clsx from 'clsx';
interface Props {
  children: React.ReactNode | React.ReactNode[];
  open?: boolean;
}
const AppBar: React.FC<Props> = ({ children, open }) => {
  const classes = useStyles({});
  return (
    <MuiAppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      {children}
    </MuiAppBar>
  );
};
export default AppBar;
