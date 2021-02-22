import React from 'react';
import BarCode from './assests/BarCode.png';
import { IconButton } from '@material-ui/core';

const SearchByQuery = () => {
  return (
    <IconButton onClick={() => console.log('klik')}>
      <img height={35} src={BarCode} alt="bar code button" />
    </IconButton>
  );
};

export default SearchByQuery;
