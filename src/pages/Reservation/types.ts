
export type ReservationProperties = FromToDateKey;


export type FromToDateKey = 'dateFrom' | 'dateTo';
export type FromToDate = Record<FromToDateKey, string>;