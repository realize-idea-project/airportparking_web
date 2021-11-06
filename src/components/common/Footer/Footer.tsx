import React from 'react';
import styled from 'styled-components';
import { color, images } from '../../../constants';

import { Blank } from '../Blank';


const companyInfo1 = '상호명: 라라주차 / 사업자등록번호 : 814-99-00723';
const companyAddress1 = '서울특별시 강서구 마곡중앙로 76, 지하5층';
const companyAddress2 = '(마곡동, 힐스테이트에코 마곡역)';
const workingHours = '업무시간 : AM 05시 ~ PM 23시 연중무휴';
const contact1 = '예약문의: 010-6202-2114';
const contact2 = '입출고: 010-2040-6634';
const copyright = '©COPYRIGHT RARA PARKING SERVICE RIGHTS RESERVED.';

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
        <FooterInfo>{companyInfo1}</FooterInfo>
        <Blank height={1.5} />
        <FooterInfo>{companyAddress1}</FooterInfo>
        <FooterInfo>{companyAddress2}</FooterInfo>
        <Blank height={1.5} />
        <FooterInfo>{workingHours}</FooterInfo>
        <Blank height={1.5} />
        <FooterInfo>{contact1}</FooterInfo>
        <FooterInfo>{contact2}</FooterInfo>
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