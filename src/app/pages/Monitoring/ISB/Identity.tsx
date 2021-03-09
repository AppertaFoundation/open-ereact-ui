import React from 'react';
import { Card, Record } from 'components';
import { useSelector } from 'react-redux';
import { selectPatient } from '../Patient/selectors';
import { useStyles } from '../styles';

const Identity = () => {
  const patient = useSelector(selectPatient);
  const classes = useStyles();

  return (
    <Card
      name={patient?.name}
      identifier={patient?.nhsnumber}
      news2={patient?.news2}
      id={patient?.id}
      className={classes.identityCard}
    >
      <Record
        birthDate={patient?.birthDate}
        gender={patient?.gender}
        location={patient?.location}
        consultant={patient?.consultant}
        discharge={patient?.discharge}
        admitted={patient?.admitted}
      />
    </Card>
  );
};

export default Identity;
