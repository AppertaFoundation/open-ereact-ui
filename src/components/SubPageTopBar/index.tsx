import React from 'react';
import AppBar from '../Layout/AppBar';
import { Toolbar } from '@material-ui/core';

interface Props {
  children?: React.ReactNode;
}
const SubPageTopBar: React.FC<Props> = ({ children }) => {
  return (
    <AppBar open={false} color="inherit">
      {children}
    </AppBar>
  );
};

export default SubPageTopBar;
