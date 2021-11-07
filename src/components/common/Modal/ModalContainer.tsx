import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { color, images } from '../../../constants';


// interface Props {
//   onClose: (event: FocusInputEvent) => void;
//   children?: JSX.Element;
// }

export const ModalContainer = ({ onClose, children }: any) => {
  return createPortal(
    <PositionRelativeContainer>
      <Overlay onClick={onClose} />
      <ModalViewContainer>
        <CloseButtonImage src={images.closeButton} onClick={onClose} />
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
  z-index: 9997;
`;

const ModalViewContainer = styled.div`
  width: 10vw;
  padding: 5vw;
  background-color: ${color.white};
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 9998;
`;

const CloseButtonImage = styled.img`
  width: 10vw;
  height: 10vw;
  cursor: pointer;

  position: absolute;
  top: 10vw;
  right: 10vw;
`;


// width: ${unit(24)};
//   height: ${unit(24)};
//   cursor: pointer;

//   position: absolute;
//   top: ${unit(30)};
//   right: ${unit(30)};