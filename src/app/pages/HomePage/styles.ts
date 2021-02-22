import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  fixed: {
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 500,
    background: 'white',
    position: 'fixed',
    top: 65,
    left: 0,
  },
}));
