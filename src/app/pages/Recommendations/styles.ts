import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles(theme => ({
  fullWidth: {
    width: '100%',
    height: 'calc(100vh - 90px)',
  },
  section: {
    backgroundColor: '#fff',
    border: '2px solid #fff',
    borderRadius: '35px',
    height: '100%',
    padding: '8px',
  },
  sepsisScreening: {
    backgroundColor: 'rgb(0, 172, 199, 35%)',
    borderRadius: '35px',
    padding: 15,
  },
}));
