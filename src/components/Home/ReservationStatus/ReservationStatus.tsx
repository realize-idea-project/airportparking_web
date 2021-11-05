/* eslint-disable react/require-default-props */
import React, { FC, useState, useEffect } from 'react';
import _ from 'lodash';
import { AirportType, RouterPathType } from '../../../types';
import { RouterPath } from '../../../constants';
import { Blank } from '../../common';
import { HomeContentsContainer, HomeContentHeader } from '../common';
import { ReservationStatusItem } from './ReservationStatusItem';
import { dummyCustomers, CustomerType } from './dummyCustomers';

interface Props {
  airportType?: AirportType;
  onClickItem: (path: RouterPathType) => () => void;
  onClickShowMore: (path: RouterPathType) => () => void;
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
      <HomeContentHeader subTitle={subTitle} title='RESERVATION STATUS' onClickShowMore={onClickShowMore(RouterPath.ReservationStatus)} />
      <Blank height={3} />
      {
        customers.map((customer, index) => {
          const { name, plateNumber, reservationStatus, reservationTimestamp, dateFrom, dateTo } = customer;

          return (
            <div key={name}>
              <ReservationStatusItem
                guestName={name}
                plateNumber={plateNumber}
                reservationStatus={reservationStatus}
                reservationTimestamp={reservationTimestamp}
                dateFrom={dateFrom}
                dateTo={dateTo}
                onClickItem={onClickItem(RouterPath.ReservationStatus)}
              />
              { index !== customers.length - 1 ? <Blank height={3} /> : null }
            </div>
          );
        })
      }
      <Blank height={8} />
    </HomeContentsContainer>
  );
};
