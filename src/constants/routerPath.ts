import { RouterPathType } from '../types';

type Route = 'Home' | 'AboutUs' | 'Reservation' | 'Instruction' | 'Price' | 'Facility' | 'ContactUs' | 'QnA';

export const RouterPath: Record<Route, RouterPathType> = {
  Home: '/',
  AboutUs: '/aboutUs',
  Reservation: '/reservation',
  Instruction: '/instruction',
  Price: '/price',
  Facility: '/facility',
  ContactUs: '/contactUs',
  QnA: '/QnA',
};