
export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().getMonth();
export const currentDate = new Date().getDate();


export const serviceUsePeriodOptions = {
  year: [currentYear - 2, currentYear - 1, currentYear, currentYear + 1, currentYear + 2].map((year) => `${year}년`),
  month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => `${month}월`),
  date: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((date) => `${date}일`),
  hour: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((hour) => `${hour}시`),
  minute: ['00', 10, 20, 30, 40, 50].map((minute) => `${minute}분`),
};