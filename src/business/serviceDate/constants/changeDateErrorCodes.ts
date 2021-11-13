export type ErrorCode = '1' | '2' | '3';

export const selectDateErrorCodes: Record<string, ErrorCode> = {
  chooseEarlierDateThanCurrentDate: '1',
  chooseEarlierDateThanDateFrom: '2',
  chooseLaterDateThanDateTo: '3',
};