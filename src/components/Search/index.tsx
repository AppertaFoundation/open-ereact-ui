import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography, Box, withStyles } from '@material-ui/core';
import { searchByNameOrNhs } from 'utils/fake';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchAutocomplete = withStyles({
  popupIndicator: {
    '& span': {
      '& svg': {
        '& path': {
          d:
            "path('M18.125 15.804l-4.038-4.037a6.643 6.643 0 001.01-3.534C15.089 4.62 12.199 1.75 8.584 1.75 4.815 1.75 1.982 4.726 2 8.286c.021 3.577 2.908 6.549 6.578 6.549a6.464 6.464 0 003.44-.985l4.032 4.026c.167.166.43.166.596 0l1.479-1.478a.415.415 0 000-.594M8.578 13.99c-3.198 0-5.716-2.593-5.733-5.71-.017-3.084 2.438-5.686 5.74-5.686 3.197 0 5.625 2.493 5.64 5.624.017 3.33-2.604 5.772-5.647 5.772m7.771 2.991l-3.637-3.635c.131-.11.721-.695.876-.884l3.642 3.639-.881.88z')",
        },
      },
    },
  },
})(Autocomplete);

type searchOption = {
  name: string;
  nhsnumber: string;
  birthDateAsString: string;
};
interface Props {
  options?: searchOption[];
}

const SearchOption: React.FC<searchOption> = ({
  name,
  nhsnumber,
  birthDateAsString,
}) => (
  <Box>
    <Typography variant="h6" noWrap>
      {name}
    </Typography>
    <Typography variant="body1" color="textSecondary" noWrap>
      {nhsnumber}
    </Typography>
    <Typography variant="subtitle1">{birthDateAsString}</Typography>
  </Box>
);

const Search: React.FC<Props> = ({ options }) => {
  const handleRenderOption = option => (
    <SearchOption {...(option as searchOption)} />
  );
  const handleFilterOptions = (optionsToFilter, params) =>
    searchByNameOrNhs(optionsToFilter, params.inputValue);
  return (
    <SearchAutocomplete
      id="Search-autocomplete"
      fullWidth
      autoHighlight
      renderOption={handleRenderOption}
      filterOptions={handleFilterOptions}
      options={options || []}
      renderInput={params => (
        <TextField
          {...params}
          label="Search Name/ NHS number"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
  );
};

export default Search;
