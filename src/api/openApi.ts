import axios from 'axios';
import { openApiUrl } from '../constants';

type HolidayTypes = '국경일' | '공휴일';
export const loadHolidayDates = async (year: number, type?: HolidayTypes, page = 1, limit = 100) => {
  const apiType = type === '국경일' ? 'getHoliDeInfo' : 'getRestDeInfo';
  const url = `${openApiUrl}/${apiType}`;
  const queryParams = {
    ServiceKey: process.env.REACT_APP_OPEN_API_KEY,
    pageNo: page,
    numOfRows: limit,
    solYear: year,
   };

   const res = await axios(url, { params: queryParams })
   return res;
};