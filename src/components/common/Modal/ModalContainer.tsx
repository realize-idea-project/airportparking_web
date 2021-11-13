import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { color, images, ScreenBreakPoint } from '../../../constants';

const { MobileXXS, MobileXS, MobileS, MobileM, MobileL, PadS, Desktop } = ScreenBreakPoint;

interface Props {
  onClickCloseButton: (event: any) => void;
  onClickOverlay?: (event: any) => void;
  children?: any;
}

export const ModalContainer: FC<Props> = ({ onClickOverlay, onClickCloseButton, children }) => {
  return createPortal(
    <PositionRelativeContainer>
      <Overlay onClick={onClickOverlay} />
      <ModalViewContainer>
        <CloseButtonImage src={images.closeButton} onClick={onClickCloseButton} />
        
        {children}
      </ModalViewContainer>
    </PositionRelativeContainer>,
    document.getElementById('portal') as HTMLElement,
  );
};



const PositionRelativeContainer = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 4;
`;

const ModalViewContainer = styled.div`
  width: 80vw;
  padding: 5vw;
  background-color: ${color.white};
  border-radius: 1.5vw;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);

  position: fixed;
  
  left: 50vw;
  transform: translate(-45vw, -15vw);

  @media only screen and (${ MobileXXS }) {
    top: 45vw;
  }

  @media only screen and (${ MobileXS }) {
    top: 45vw;
  }

  @media only screen and (${ MobileS }) {
    top: 43vw;
  }

  @media only screen and (${ MobileM }) {
    top: 40vw;
  }

  @media only screen and (${ MobileL }) {
    top: 40vw;
  }

  @media only screen and (${ PadS }) {
    top: 40vw;
  }

  @media only screen and (${ Desktop }) {
    top: 35vw;
  }


  z-index: 5;
`;

const CloseButtonImage = styled.img`
  width: 4vw;
  height: 4vw;
  cursor: pointer;
  
  position: absolute;
  top: 4vw;
  right: 4vw;
`;
