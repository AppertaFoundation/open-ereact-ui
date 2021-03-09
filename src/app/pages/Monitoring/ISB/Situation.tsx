import React from 'react';
import {
  Box,
  Grid,
  InputLabel,
  Divider,
  InputBase,
  Typography,
  DialogContent,
  ListItemText,
  ListItem,
  List,
} from '@material-ui/core';
import { Button, Dialog, DialogTitle } from 'components';
import { useStyles } from '../styles';

const MAX_CHARS_ISB_TABS = 255;

const Situation = ({ register }) => {
  const [avaibleChars, setAvaibleChars] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const classes = useStyles();
  const handleChangeAvaibleCharts = e => {
    e.preventDefault();
    const value = e.target.value;
    setAvaibleChars(value.length);
  };
  return (
    <Box p={3} pt={2} flex="auto" display="flex" className={classes.situation}>
      <Box flex="auto" width={3 / 4}>
        <InputLabel>Situation</InputLabel>
        <InputBase
          name="situation"
          multiline
          rows="5"
          fullWidth
          onChange={handleChangeAvaibleCharts}
          inputRef={register}
          placeholder="Please enter patient information at this point to indicate what that patient situation is."
        />
        {/* {errors && <ErrorMsg name={'notes'} errors={errors} />} */}
      </Box>
      <Divider variant="middle" flexItem orientation="vertical" />
      <Box flex="auto">
        <Box>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Typography variant="button">{`${avaibleChars}/${MAX_CHARS_ISB_TABS}`}</Typography>
            </Grid>
            <Grid item>
              <Button.Primary onClick={handleOpen} variant="contained">
                Help
              </Button.Primary>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {open && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="title" onClose={handleClose}>
            <Typography component="div" noWrap variant="h5">
              Situation Information
            </Typography>
          </DialogTitle>

          <DialogContent>
            <List>
              <ListItem>
                <ListItemText primary={' Why are you concerned?'} />
              </ListItem>
              <ListItem>
                <ListItemText primary={'Is there any abnormal physiology?'} />
              </ListItem>
              <ListItem>
                <ListItemText primary={'Hint 3'} />
              </ListItem>
            </List>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default Situation;
