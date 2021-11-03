/* eslint-disable react/require-default-props */
import React, { FC, useState, useEffect } from 'react';
import _ from 'lodash';
import { AirportType } from '../../../types';
import { Blank } from '../../common';
import { HomeContentsContainer } from '../styled';
import { ReservationStatusHeader } from './ReservationStatusHeader';
import { ReservationStatusItem } from './ReservationStatusItem';
import { dummyCustomers, CustomerType } from './dummyCustomers';

interface Props {
  airportType?: AirportType;
  onClickItem?: () => void;
  onClickShowMore?: () => void;
}

export const ReservationStatus: FC<Props> = ({ airportType = 'Gimpo', onClickItem, onClickShowMore }) => {
  const [customers, setCustomers] = useState<CustomerType[] | undefined>();

  useEffect(() => {
    const randomCustomers = _.shuffle(dummyCustomers).slice(0, 3);
    setCustomers(randomCustomers);
  }, [])

  const subTitle = airportType === 'Gimpo' ? '김포공항 주차예약' : '인천공항 주차예약';


  if (_.isNil(customers)) return null;

  return (
    <HomeContentsContainer>
      <Blank height={5} />
      <ReservationStatusHeader subTitle={subTitle} />
      <Blank height={3} />
      {
        customers.map((customer, index) => {
          const { name, plateNumber, reservationStatus, reservationTimestamp, dateFrom, dateTo } = customer;

          return (
            <>
              <ReservationStatusItem
                guestName={name}
                plateNumber={plateNumber}
                reservationStatus={reservationStatus}
                reservationTimestamp={reservationTimestamp}
                dateFrom={dateFrom}
                dateTo={dateTo}
              />
              { index !== customers.length - 1 ? <Blank height={3} /> : null }
            </>
          );
        })
      }
      <Blank height={8} />
    </HomeContentsContainer>
  );
};
