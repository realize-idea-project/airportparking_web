import React, { useState } from 'react';
import { reservationPageAlertMessages } from './constants';



export const usePriceModal = (serviceDays: number) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    if (serviceDays === 0) {
      alert(reservationPageAlertMessages.openModalAlert);
      return;
    }

    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return { isModalOpened, openModal, closeModal }
};