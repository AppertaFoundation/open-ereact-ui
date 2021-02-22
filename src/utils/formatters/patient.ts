import { formatDate, formatAge, formatAdmitted } from './time';

export const getGender = (value: string) =>
  value === 'female' ? 'Female' : 'Male';

export const getPatientListFormatter = patients => {
  return patients.map(
    ({
      news2,
      gender,
      name,
      id,
      location,
      nhsnumber,
      birthDateAsString,
      admitted,
      discharge,
      consultant,
    }) => ({
      id,
      name,
      gender: getGender(gender),
      location,
      birthDate: `${formatDate(birthDateAsString)} ${formatAge(
        birthDateAsString,
      )}`,
      nhsnumber,
      admitted: formatAdmitted(admitted),
      discharge: formatDate(discharge),
      consultant,
      news2,
    }),
  );
};
