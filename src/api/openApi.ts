import axios from 'axios';
import { openApiHolidayUrl } from '../constants';

type HolidayTypes = '국경일' | '공휴일';
export const loadHolidayDates = async (year: number, type?: HolidayTypes, page = 1, limit = 100) => {
  const apiType = type === '국경일' ? 'getHoliDeInfo' : 'getRestDeInfo';
  const url = `${openApiHolidayUrl}/${apiType}`;
  const queryParams = {
    ServiceKey: process.env.REACT_APP_OPEN_API_KEY,
    pageNo: page,
    numOfRows: limit,
    solYear: year,
   };

  try {
    const res = await axios(url, { params: queryParams });
    console.log('------ holiday open api success -----  year: ', queryParams.solYear);
    return res.data.response.body.items.item;
  } catch (e: any) {
    console.error('------ holiday open api error', e.message);
    console.log('------ holiday open api error');
    return [];
  }
};