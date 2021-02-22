import { withStyles, Theme } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

export const ButtonSuccess = withStyles((theme: Theme) => ({
  contained: {
    minWidth: '100%',
    backgroundColor: theme.palette.success.main,
    textTransform: 'none',
    color: '#fff',
  },
  root: {
    borderRadius: '35px',
  },
}))(MuiButton);

export const ButtonSecondary = withStyles((theme: Theme) => ({
  contained: {
    minWidth: '100%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: '#e94e1b',
      boxShadow: 'none',
      color: theme.palette.secondary.contrastText,
    },
    '&:active': {
      backgroundColor: '#e94e1b',
      boxShadow: 'none',
      color: theme.palette.secondary.contrastText,
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      color: theme.palette.secondary.contrastText,
    },
  },
  root: {
    minWidth: '100%',
    borderRadius: '35px',
  },
  outlined: {
    minWidth: '100%',
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  },
}))(MuiButton);

export const ButtonPrimmary = withStyles((theme: Theme) => ({
  root: {
    borderRadius: '35px',
  },
  contained: {
    minWidth: '100%',
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  outlined: {
    minWidth: '100%',
    color: theme.palette.primary.main,
  },
}))(MuiButton);
