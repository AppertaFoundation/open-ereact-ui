import React from 'react';
import { Grid } from '@material-ui/core';
import Text from '../Text';

interface Props {
  birthDate?: string;
  location?: string;
  gender?: string;
  consultant?: string;
  discharge?: string;
  admitted?: string;
}

const Record: React.FC<Props> = ({
  location,
  gender,
  birthDate,
  consultant,
  discharge,
  admitted,
}) => {
  return (
    <Grid container>
      <Grid item lg={2} sm={4} xs={12}>
        {birthDate && <Text label="DOB">{birthDate}</Text>}
      </Grid>
      <Grid item lg={2} sm={4} xs={12}>
        {gender && <Text label="Gender">{gender}</Text>}
      </Grid>
      <Grid item lg={2} sm={4} xs={12}>
        {location && <Text label="Location">{location}</Text>}
      </Grid>
      <Grid item lg={2} sm={4} xs={12}>
        {consultant && <Text label="Consultant">{consultant}</Text>}
      </Grid>
      <Grid item lg={2} sm={4} xs={12}>
        {admitted && <Text label="Admitted">{admitted}</Text>}
      </Grid>
      <Grid item lg={2} sm={4} xs={12}>
        {discharge && <Text label="Ex. discharge">{discharge}</Text>}
      </Grid>
    </Grid>
  );
};

export default Record;
