import { ReservationProperties } from './types';

export const reservationProperties: Record<ReservationProperties, ReservationProperties> = {
  dateTo: 'dateTo',
  dateFrom: 'dateFrom',
};

export const reservationPageAlertMessages = {
  openModalAlert: '서비스 이용 기간을 먼저 선택해 주세요.',
}