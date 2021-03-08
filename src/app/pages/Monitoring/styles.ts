import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles(theme => ({
  closeButton: {
    marginRight: theme.spacing(2),
  },
  section: {
    backgroundColor: '#fff',
    border: '2px solid #fff',
    borderRadius: '35px',
    padding: '15px',
  },
  isbSection: {
    backgroundColor: '#fff',
    borderRadius: '35px',
  },
  fullWidth: {
    width: '100%',
    height: 'calc(100vh - 135px)',
  },
  identityCard: {
    paddingTop: 0,
  },
  // demo: {
  //   backgroundColor: theme.palette.background.paper,
  //   height: 200,
  //   margin: theme.spacing(2),
  //   [theme.breakpoints.up('sm')]: {
  //     height: 100,
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     height: 200,
  //   },
  // },

  // subSection: {
  //   backgroundColor: '#fff',
  //   border: '2px solid #DADADA',
  //   borderRadius: '35px',
  //   padding: '15px',
  // },
}));
