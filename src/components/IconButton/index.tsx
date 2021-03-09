import { styled, withStyles } from '@material-ui/core/styles';
import MuiIconButton from '@material-ui/core/IconButton';

const IconLabel = styled('p')({
  fontSize: '12px',
  marginTop: 0,
  marginBottom: 0,
});

const IconButton = withStyles(() => ({
  label: {
    flexDirection: 'column',
  },
}))(MuiIconButton);

export { IconLabel, IconButton };
