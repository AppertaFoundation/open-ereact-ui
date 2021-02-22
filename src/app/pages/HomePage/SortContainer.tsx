import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  IconButton,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import DeleteIcon from '@material-ui/icons/Delete';

import { Button, SelectItem } from 'components';

import uniqid from 'uniqid';

const SORT_BY = [
  {
    id: 'name',
    name: 'Name',
  },
  {
    id: 'birthdate',
    name: 'Age',
  },
  {
    id: 'news2',
    name: 'News2',
  },
];

export const RadioItem: React.FC<{
  value: string;
  label: string;
  disabled?: boolean;
}> = ({ value, label, disabled }) => (
  <FormControlLabel
    value={value}
    control={<Radio size="small" color="primary" disabled={disabled} />}
    label={label}
  />
);

interface Props {
  id?: string;
  onFilterSort: any;
  defaultValues: {
    sort: null | { key: string; value: string };
  };
  sort?: boolean;
}
const ACTIVE_BTN = '#29375d';
const Sort: React.FC<Props> = React.forwardRef(
  ({ onFilterSort, defaultValues, sort }, ref) => {
    const [state, setState] = React.useState<any>({
      sort: null,
    });
    const [arrows, setArrows] = React.useState({ ASC: '', DESC: '' });

    const useEffectOnMount = (effect: React.EffectCallback) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      React.useEffect(effect, []);
    };
    useEffectOnMount(() => {
      setState(defaultValues);
      if (!defaultValues?.sort?.value) {
        setAsc();
      } else {
        setArrows(
          defaultValues?.sort?.value === 'ASC'
            ? { ASC: ACTIVE_BTN, DESC: '' }
            : { ASC: '', DESC: ACTIVE_BTN },
        );
      }
    });

    const handleChange = event => {
      setState(oldState => ({
        ...oldState,
        sort: { ...oldState.sort, key: event.target.value },
      }));
    };
    const setOrder = order =>
      setState(oldState => ({
        ...oldState,
        sort: { ...oldState.sort, value: order },
      }));
    const clearOrder = () =>
      setState(oldState => ({
        ...oldState,
        sort: { value: 'DESC', key: 'news2' },
      }));

    const setAsc = () => {
      setArrows({ ASC: ACTIVE_BTN, DESC: '' });
      setOrder('ASC');
    };
    const setDesc = e => {
      setArrows({ ASC: '', DESC: ACTIVE_BTN });
      setOrder('DESC');
    };
    const handleFilterSort = e => {
      onFilterSort(state);
    };
    const clearAll = e => {
      clearOrder();
      onFilterSort({ sort: { value: 'DESC', key: 'news2' } });
    };

    return (
      <Box p={1} m={1}>
        {sort && (
          <Box
            width={300}
            display="flex"
            flexDirection="row"
            bgcolor="background.paper"
          >
            <Box p={1} flexShrink={1}>
              <FormControl>
                <FormLabel component="legend">Sort by:</FormLabel>
                <Select
                  native
                  value={state.sort ? state.sort.key : ''}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                  }}
                >
                  <SelectItem value="" aria-label="None" />
                  {SORT_BY.map(({ id, name }) => (
                    <SelectItem key={uniqid()} value={id}>
                      {name}
                    </SelectItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box p={1}>
              <IconButton onClick={setAsc}>
                <ArrowUpwardIcon htmlColor={arrows.ASC} />
              </IconButton>
              <IconButton onClick={setDesc}>
                <ArrowDownwardIcon htmlColor={arrows.DESC} />
              </IconButton>
            </Box>
            <Box>
              <IconButton onClick={clearOrder}>
                <DeleteIcon htmlColor={ACTIVE_BTN} />
              </IconButton>
            </Box>
          </Box>
        )}

        <Box display="flex" flexDirection="row-reverse">
          <Box p={1}>
            {' '}
            <Button.Secondary variant="contained" onClick={handleFilterSort}>
              Apply
            </Button.Secondary>
          </Box>
          <Box p={1}>
            <Button.Primary variant="contained" onClick={clearAll}>
              Clear all
            </Button.Primary>
          </Box>
        </Box>
      </Box>
    );
  },
);
export default Sort;
