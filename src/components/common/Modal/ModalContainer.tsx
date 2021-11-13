import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { color, images } from '../../../constants';


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
  width: 80vw;;
  padding: 5vw;
  background-color: ${color.white};
  border-radius: 1.5vw;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

const CloseButtonContainer = styled.div`
  height: 4vw;
`;


// width: ${unit(24)};
//   height: ${unit(24)};
//   cursor: pointer;

//   position: absolute;
//   top: ${unit(30)};
//   right: ${unit(30)};