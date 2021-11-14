import axios, { AxiosResponse } from 'axios';

export const successHandler = (res: AxiosResponse) => res.data;

export const failureHandler = (e: any) => {
  console.error('Request Failed:', e.config);

  if (e.response) {
    console.error('Status:', e.response.status);
    console.error('Data:', e.response.data);
    console.error('Headers:', e.response.headers);
  } else {
    console.error('Error Message:', e.message);
  }

  throw e;
};
