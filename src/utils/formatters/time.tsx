const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const daysDifference = (start?: any, end?: any) => {
  if (start) {
    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : Date.now();
    return Math.round(
      Math.abs((startDate.valueOf() - endDate.valueOf()) / oneDay),
    );
  }
  return null;
};

export const formatTime = (value?: string) => {
  if (value) {
    const date = new Date(value);
    let houre = date.getHours();
    const minuts = date.getMinutes();
    const printHoure = houre < 10 ? `0${houre}` : `${houre}`;
    const printMinutes = minuts < 10 ? `0${minuts}` : `${minuts}`;

    return `${printHoure}:${printMinutes}`;
  }
  return null;
};
//TODO[3]: https://stackoverflow.com/questions/15109894/new-date-works-differently-in-chrome-and-firefox
//Chrome adds timezone offset while Firefox doesn
export const formatDate = (value: string) => {
  const date = new Date(value);
  if (!date) {
    const birthDate = value.split('-');
    return renderDate(birthDate);
  }
  return renderDate(date);
};

const renderDate = date => {
  const year = date.getFullYear().toString().slice(-2);
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  return `${day}-${month}-${year}`;
};

export const formatAge = (value: string) => {
  const date = new Date(value);
  if (!date) {
    const birthDate = value.split('-');
    return renderAge(birthDate);
  }
  return renderAge(date);
};

const renderAge = date => {
  const diffMs = Date.now() - date.getTime();
  const ageDt = new Date(diffMs);
  return `(${Math.abs(ageDt.getUTCFullYear() - 1970)} yrs)`;
};

const daysDiff = value => {
  const end = new Date();
  const start = new Date(value);
  const DAY = 1000 * 60 * 60 * 24;
  return Math.floor(
    (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
      Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
      DAY,
  );
};

export const formatAdmitted = date => {
  return `${formatDate(date)} (${daysDiff(date)} days)`;
};
