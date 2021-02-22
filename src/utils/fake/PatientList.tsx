const PATIENT_LIST = [
  {
    news2: {
      value: {
        trend: 'same',
        value: 4,
        clinicalRisk: 'at0057',
      },
    },
    birthDateAsString: '1965-12-13',
    gender: 'female',
    name: 'Mrs Fredrica Smith',
    location: 'Bed 4, Ward 33',
    birthDate: -127872000,
    nhsnumber: '3333333333',
    id: '3B9170C6-30B6-11EB-9B84-84525E058BE1',
    admitted: '2021-02-05T14:48:00.000Z',
    discharge: '2011-02-15T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
  {
    id: '3B917756-30B6-11EB-9B84-84525E058BE1',
    nhsnumber: '9564963656',
    location: 'Bed 4, Ward 33',
    birthDate: -870919200,
    name: 'Miss Kendra Fitzgerald',
    birthDateAsString: '1942-05-28',
    news2: {
      value: null,
    },
    gender: 'female',
    admitted: '2021-02-05T14:48:00.000Z',
    discharge: '2011-02-15T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
  {
    name: 'Miss Zara Tengku',
    news2: {
      value: null,
    },
    birthDateAsString: '1945-04-30',
    gender: 'female',
    id: '3B9183B8-30B6-11EB-9B84-84525E058BE1',
    nhsnumber: '9564963656',
    location: 'Bed 4, Ward 33',
    birthDate: -778644000,
    admitted: '2021-02-06T14:48:00.000Z',
    discharge: '2011-02-16T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
  {
    name: 'Miss Praveen Dora',
    gender: 'female',
    news2: {
      value: null,
    },
    birthDateAsString: '1998-03-13',
    id: '3B90A7AE-30B6-11EB-9B84-84525E058BE1',
    nhsnumber: '9876543210',

    birthDate: 889747200,
    location: 'Bed 4, Ward 33',
    admitted: '2021-02-05T14:48:00.000Z',
    discharge: '2011-02-16T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
  {
    birthDateAsString: '1923-08-14',
    news2: {
      value: null,
    },
    gender: 'female',
    name: 'Mrs Christine Taylor',
    location: 'Bed 4, Ward 33',
    birthDate: -1463792400,
    id: '3B917A62-30B6-11EB-9B84-84525E058BE1',
    nhsnumber: '9933157213',
    admitted: '2021-02-07T14:48:00.000Z',
    discharge: '2011-02-17T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
  {
    location: 'Bed 4, Ward 33',
    birthDate: -1081904400,
    nhsnumber: '9564963656',
    id: '3B917418-30B6-11EB-9B84-84525E058BE1',
    birthDateAsString: '1935-09-20',
    news2: {
      value: null,
    },
    gender: 'female',
    name: 'Mrs Vicky Munoz',
    admitted: '2021-02-08T14:48:00.000Z',
    discharge: '2011-02-15T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
  {
    nhsnumber: '9876512345',
    id: '3B916D60-30B6-11EB-9B84-84525E058BE1',
    birthDate: 281318400,
    location: 'Bed 4, Ward 33',
    name: 'Mrs Elsie Mills-Samson',
    gender: 'male',
    news2: {
      value: null,
    },
    birthDateAsString: '1978-12-01',
    admitted: '2021-02-05T14:48:00.000Z',
    discharge: '2011-02-15T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
  {
    nhsnumber: '9876543210',
    id: '3B917D6E-30B6-11EB-9B84-84525E058BE1',
    location: 'Bed 4, Ward 33',
    birthDate: 964998000,
    name: 'Miss Delisay Santos',
    news2: {
      value: {
        trend: 'raising',
        value: 10,
        clinicalRisk: 'at0060',
      },
    },
    admitted: '2021-02-08T14:48:00.000Z',
    discharge: '2011-02-18T14:48:00.000Z',
    consultant: 'Dr Davey',
    birthDateAsString: '2000-07-31',
    gender: 'female',
  },
  {
    location: 'Bed 4, Ward 33',
    birthDate: 897346800,
    id: '3B9180AC-30B6-11EB-9B84-84525E058BE1',
    nhsnumber: '9712738531',
    news2: {
      value: {
        trend: 'raising',
        value: 6,
        clinicalRisk: 'at0059',
      },
    },
    birthDateAsString: '1998-06-09',
    gender: 'female',
    name: 'Miss Darlene Cunningham',
    admitted: '2021-02-10T14:48:00.000Z',
    discharge: '2011-02-11T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
  {
    name: 'Mr Horatio Samson',
    gender: 'male',
    news2: {
      value: null,
    },
    birthDateAsString: '1970-10-16',
    nhsnumber: '9876543211',
    id: '3B91690A-30B6-11EB-9B84-84525E058BE1',
    birthDate: 24879600,
    location: 'Bed 4, Ward 33',
    admitted: '2021-02-05T14:48:00.000Z',
    discharge: '2011-02-15T14:48:00.000Z',
    consultant: 'Dr Davey',
  },
];
export default PATIENT_LIST;

export const searchByNameOrNhs = (patients, searchValue) => {
  const filterd = patients.filter(
    patient =>
      patient.name.toUpperCase().includes(searchValue.toUpperCase()) ||
      patient.nhsnumber.toUpperCase().includes(searchValue.toUpperCase()),
  );
  return filterd;
};

const checkByASC = (a, b, key) => {
  if (a[`${key}`].value && !b[`${key}`].value) {
    return true;
  }
  if (!a[`${key}`].value && b[`${key}`].value) {
    return false;
  }
  if (a[`${key}`].value && b[`${key}`].value) {
    return a[`${key}`].value.value > b[`${key}`].value.value;
  }
  return false;
};

const checkOrder = (a, b, sort) => {
  const { key, value } = sort;
  const ASC = 'ASC';
  const sortedASC = checkByASC(a, b, key);
  return value === ASC ? sortedASC : !sortedASC;
};

const sortByAsssessmentValue = (unsorted, sort) =>
  unsorted.reduce((sorted, el) => {
    let index = 0;
    while (index < sorted.length && checkOrder(el, sorted[index], sort))
      index++;
    sorted.splice(index, 0, el);
    return sorted;
  }, []);

const checkOrderByAge = (a, b, order) => {
  const sortedASC = a.birthdate > b.birthdate;
  return order === 'ASC' ? sortedASC : !sortedASC;
};

const sortByAge = (unsorted, order) =>
  unsorted.reduce((sorted, el) => {
    let index = 0;
    while (index < sorted.length && checkOrderByAge(el, sorted[index], order))
      index++;
    sorted.splice(index, 0, el);
    return sorted;
  }, []);

const removePrefix = name => {
  const splitedName = name.split(' ');
  splitedName.shift();
  return splitedName.join(' ');
};
const SortByName = unsorted => {
  return unsorted.sort((a, b) => {
    const aName = removePrefix(a.name);
    const bName = removePrefix(b.name);

    return aName.localeCompare(bName);
  });
};

export const sort = (arrayToSort, params) => {
  const { value, key } = params;
  if (key === 'news2' || key === 'denwis') {
    return sortByAsssessmentValue(arrayToSort, params);
  }
  if (key === 'name') {
    const sorted = SortByName(arrayToSort);
    return key === 'ASC' ? sorted : sorted.reverse();
  }
  if (key === 'birthdate') {
    return sortByAge(arrayToSort, value);
  }
  return arrayToSort;
};
