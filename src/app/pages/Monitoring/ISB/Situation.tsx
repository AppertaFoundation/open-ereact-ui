import React from 'react';
import {
  Box,
  Grid,
  InputLabel,
  TextField,
  Divider,
  InputBase,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../styles';

const MAX_CHARS_ISB_TABS = 255;

const Situation = ({ register }) => {
  const [avaibleChars, setAvaibleChars] = React.useState(0);
  const classes = useStyles();
  const handleChangeAvaibleCharts = e => {
    e.preventDefault();
    const value = e.target.value;
    setAvaibleChars(value.length);
  };
  return (
    <Box p={3} pt={2} flex="auto" display="flex">
      <Box flex="auto" width={3 / 4}>
        <InputLabel>Notes</InputLabel>
        <InputBase
          // InputLabelProps={{ shrink: true }}
          name="notes"
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
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Situation;
