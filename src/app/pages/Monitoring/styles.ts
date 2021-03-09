import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles(theme => ({
  closeButton: {
    marginRight: theme.spacing(2),
  },
  section: {
    backgroundColor: '#fff',
    border: '2px solid #fff',
    borderRadius: '0px 0px 15px 15px',
    height: '100%',
    padding: '8px',
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
    margin: 0,
    borderRadius: '0px 0px 15px 15px',
  },
  situation: {
    backgroundColor: '#fff',
    border: '2px solid #fff',
    borderRadius: '0px 0px 15px 15px',
  },
}));
