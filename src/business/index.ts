export {
  representative,
  companyName,
  companyRegistrationNumber,
  mainAddress,
  subAddress,
  workingHours,
  reservationContact,
  serviceContact,
  copyright,
  parkinglotLatitude,
  parkinglotLongitude,
} from './company';


export { getInitailServieDate, getHowManyDaysUseService, getErrorCode, getErrorMessage } from './serviceDate';
export type { ServiceDateKey, ServiceDate } from './serviceDate/types';
export { dateFormat } from './serviceDate/constants';