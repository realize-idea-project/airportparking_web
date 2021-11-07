import dayjs from 'dayjs';

const currentYear = dayjs(new Date()).year();

// working hour is 5am to 11pm
// hour: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],

export const ymdhmList = {
  year: [currentYear - 2, currentYear - 1, currentYear, currentYear + 1, currentYear + 2],
  month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  date: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  hour: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  minute: ['00', 10, 20, 30, 40, 50],
};

export const getYmdhm = (ymdhm: string) => {
  // ymdhs format: 'YYYY-MM-DD hh:mm'
  const [ymd, hm] = ymdhm.split(' ');
  const [selectedYear, selectedMonth, selectedDate] = ymd.split('-').map((ymd) => Number(ymd));
  const [selectedHour, selectedMinute] = hm.split(':').map((ymd) => Number(ymd));

  return { selectedYear, selectedMonth, selectedDate, selectedHour, selectedMinute };
};