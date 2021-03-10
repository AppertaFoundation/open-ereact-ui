import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SubPageTopBar,
  IconLabel,
  IconButton,
  DialogTitle,
  Dialog,
  Button,
} from 'components';
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Toolbar,
  DialogContent,
  FormControlLabel,
  FormGroup,
  Checkbox,
  DialogActions,
  Grid,
} from '@material-ui/core';
import MuiIconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

import { useHistory, useParams } from 'react-router-dom';

import { selectName, selectNHS } from '../Patient/selectors';
import { usePatientSlice } from '../Patient/slice';

const Header: React.FC<{
  onEdit?: any;
  isMonitoring?: boolean;
  title: string;
}> = ({ onEdit, isMonitoring = false, title }) => {
  const { actions } = usePatientSlice();
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints?.down('md'));

  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const id = (params as any)?.id;

  const name = useSelector(selectName);
  const identifier = useSelector(selectNHS);

  React.useEffect(() => {
    dispatch(actions.loadPatient(id));
  }, [actions, dispatch, id]);

  const goBack = () => history.go(-1);

  return (
    <SubPageTopBar>
      <Toolbar>
        <MuiIconButton color="inherit" onClick={goBack} edge="start">
          <CloseIcon htmlColor="#000" />
        </MuiIconButton>
        <Box m={1}>
          <Typography variant={downMd ? 'h6' : 'h4'} display="block" noWrap>
            {title}
          </Typography>
        </Box>
        <Box ml={1}>
          <Typography variant={downMd ? 'body1' : 'h6'} display="block">
            {name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {identifier}
          </Typography>
        </Box>
        {isMonitoring && <EditDialog onEdit={onEdit} />}
      </Toolbar>
    </SubPageTopBar>
  );
};

export default Header;

const EditDialog = ({ onEdit }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const [state, setState] = React.useState({
    checkedNews2: true,
    checkedGlucose: false,
    checkedPainScore: false,
  });

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = () => {
    onEdit(state);
    handleClose();
  };
  return (
    <>
      <div style={{ position: 'absolute', right: 0 }}>
        <IconButton onClick={handleOpen}>
          <EditIcon htmlColor={theme.palette.primary.main} />
          <IconLabel>edit</IconLabel>
        </IconButton>
      </div>
      {open && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="title" onClose={handleClose}>
            <Typography component="div" noWrap variant="h5">
              Choose tasks - tick all that apply
            </Typography>
          </DialogTitle>
          <DialogContent>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    onChange={handleChange}
                    name="checkedNews2"
                  />
                }
                disabled
                label="NEWS2 Observation"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedGlucose}
                    onChange={handleChange}
                    name="checkedGlucose"
                  />
                }
                disabled
                label="Blood Glucose Observation"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedPainScore}
                    onChange={handleChange}
                    name="checkedPainScore"
                  />
                }
                disabled
                label="Pain Score"
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-end"
              spacing={2}
            >
              <Grid item>
                <Button.Primary onClick={handleClose}>Cancel</Button.Primary>
              </Grid>
              <Grid item>
                <Button.Secondary variant="contained" onClick={handleSubmit}>
                  Confirm
                </Button.Secondary>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
