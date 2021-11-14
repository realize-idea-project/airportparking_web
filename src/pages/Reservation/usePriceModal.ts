import React, { useState } from 'react';

import { reservationPageAlertMessages } from './constants';


export const usePriceModal = (isDateSelected: boolean) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    
    if (!isDateSelected) {
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