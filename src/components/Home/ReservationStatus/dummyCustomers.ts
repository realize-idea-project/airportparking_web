import dayjs from 'dayjs';
import { ReservationStatus } from "./types";

export interface CustomerType {
  name: string;
  plateNumber: number;
  reservationStatus: ReservationStatus;
  reservationTimestamp: string;
  dateFrom: string;
  dateTo: string;
}

export const dummyCustomers: CustomerType[] = [
  {
    name: '김김김',
    plateNumber: 4545,
    reservationStatus: 'reserved',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-15').format('YYYY-MM-DD'),
  },
  {
    name: '장장장',
    plateNumber: 3745,
    reservationStatus: 'finished',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-13').format('YYYY-MM-DD'),
  },
  {
    name: '이이이',
    plateNumber: 1145,
    reservationStatus: 'reserved',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-09').format('YYYY-MM-DD'),
  },
  {
    name: '조조조',
    plateNumber: 9445,
    reservationStatus: 'finished',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-15').format('YYYY-MM-DD'),
  },
  {
    name: '한한한',
    plateNumber: 3345,
    reservationStatus: 'applied',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-15').format('YYYY-MM-DD'),
  },
  {
    name: '최최최',
    plateNumber: 1245,
    reservationStatus: 'finished',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-22').format('YYYY-MM-DD'),
  },
  {
    name: '고고고',
    plateNumber: 8845,
    reservationStatus: 'reserved',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-19').format('YYYY-MM-DD'),
  },
  {
    name: '신신신',
    plateNumber: 2545,
    reservationStatus: 'reserved',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-15').format('YYYY-MM-DD'),
  },
  {
    name: '박박박',
    plateNumber: 4145,
    reservationStatus: 'reserved',
    reservationTimestamp: dayjs(new Date()).format('YYYY-MM-DD'),
    dateFrom: dayjs('2021-10-11').format('YYYY-MM-DD'),
    dateTo: dayjs('2021-10-15').format('YYYY-MM-DD'),
  },

];