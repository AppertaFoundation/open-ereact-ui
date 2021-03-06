import React from 'react';
import { Card, Record } from 'components';
import { useSelector } from 'react-redux';
import { selectPatient } from './selectors';

const Patient = () => {
  const patient = useSelector(selectPatient);

  return (
    <Card
      name={patient?.name}
      identifier={patient?.nhsnumber}
      news2={patient?.news2}
      id={patient?.id}
      //   className={classes.identityCard}
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

export default Patient;
