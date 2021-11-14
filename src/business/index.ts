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


export type { ServiceDateKey, ServiceDate } from './serviceDate/types';
export { dateFormat } from './serviceDate/constants';
export {
  getInitailServieDate,
  getHowManyDaysUseService,
  getErrorCode,
  getErrorMessage,
  getServicePrice
} from './serviceDate';
