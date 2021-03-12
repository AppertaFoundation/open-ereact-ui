import React from 'react';
import {
  FormLabel,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  IconButton,
  Paper,
  Grid,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from 'components';
import uniqid from 'uniqid';
import AddNewProblem from './AddNewProblem';

const rows = [
  {
    diagnosis: 'Stroke',
    certainty: 'Suspected',
    id: 1,
  },
  {
    diagnosis: 'Name',
    certainty: 'Level of certainty',
    id: 2,
  },
];
const Diagnosis = () => {
  const [state, setState] = React.useState(rows);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const addProblem = () => setOpen(true);
  const removeProblem = id => {
    const newState = state.filter(row => row.id !== id);
    setState(newState);
  };

  const handleConfirm = React.useCallback(
    newRow => {
      const newRows = [...state, newRow];
      setState(newRows);
      handleClose();
    },
    [state],
  );

  return (
    <Grid>
      <Box m={2}>
        <FormLabel component="legend">Patient Diagnosis</FormLabel>
      </Box>

      <Box display="flex" alignItems="center" m={2}>
        <TableContainer component={Paper}>
          <Table aria-label="caption table">
            <caption>
              <Button.Primary
                width={200}
                variant="contained"
                onClick={addProblem}
              >
                Add new problem
              </Button.Primary>
              <AddNewProblem
                open={open}
                onClose={handleClose}
                onConfirm={handleConfirm}
              />
            </caption>
            <TableHead>
              <TableRow>
                <TableCell>Diagnosis</TableCell>
                <TableCell>Certainty</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map(row => (
                <TableRow key={uniqid()}>
                  <TableCell component="th" scope="row">
                    {row.diagnosis}
                  </TableCell>
                  <TableCell>{row.certainty}</TableCell>
                  <TableCell align="right">
                    <Divider orientation="vertical" flexItem />
                    <IconButton
                      edge={'end'}
                      onClick={() => removeProblem(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
};

export default Diagnosis;
