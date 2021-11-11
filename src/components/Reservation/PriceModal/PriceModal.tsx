import React, { FC } from 'react';
import styled from 'styled-components';

import { ModalContainer } from '../../common';

interface Props {
  onClose: () => void;
}

export const PriceModal: FC<Props> = ({ onClose }) => {
  return (
    <ModalContainer onClickCloseButton={onClose} onClickOverlay={onClose}>
      hi
    </ModalContainer>
  );
};