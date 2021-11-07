import React from 'react';
import styled from 'styled-components';
import { color, images } from '../../../constants';
import {
  companyName,
  companyRegistrationNumber,
  mainAddress,
  subAddress,
  workingHours,
  reservationContact,
  serviceContact,
  copyright
} from '../../../business';


import { Blank } from '../Blank';

export const Footer = () => {
  return (
    <Container>
      <ColorBumper />
      <Blank height={3} />
      <LogoContainer>
        <Logo src={images.fullLogo} />
      </LogoContainer>
      <Blank height={3} />
      <CompanyInfoContaier>
        <FooterInfo>{`상호명: ${companyName} / 사업자등록번호: ${companyRegistrationNumber}`}</FooterInfo>
        <Blank height={1.5} />
        <FooterInfo>{`주소: ${mainAddress}`}</FooterInfo>
        <FooterInfo>{subAddress}</FooterInfo>
        <Blank height={1.5} />
        <FooterInfo>{`업무시간: ${workingHours}`}</FooterInfo>
        <Blank height={1.5} />
        <FooterInfo>{`예약문의: ${reservationContact}`}</FooterInfo>
        <FooterInfo>{`입출고: ${serviceContact}`}</FooterInfo>
      </CompanyInfoContaier>
      <Blank height={6} />
      <Separator />
      <Blank height={4} />
      <Copyright>{copyright}</Copyright>
      <Blank height={4} />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.darkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorBumper = styled.div`
  width: 100%;
  height: 1vw;
  background-color: ${color.gray_400};
`;

const LogoContainer = styled.div`
  width: 50vw;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const CompanyInfoContaier = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
  color: ${color.gray_150};
`;

const FooterInfo = styled.div`
  font-size: 4vw;
`;

const Separator = styled.div`
  width: 100%;
  height: 0.2vw;
  background-color: ${color.gray_400};
`;

const Copyright = styled.div`
  color: ${color.gray_150};
  font-size: 3vw;
  padding: 0 5vw;
`;