import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Blank } from '../../../common';
import { color } from '../../../../constants'
import { ChangeEvent } from '../../../../types';
import { CustomerInfoKeys } from '../../../../pages/Reservation/useCustomerInfo';

interface Props {
  onChangeName: (key: CustomerInfoKeys, value: boolean) => void;
  customerInfoKey: CustomerInfoKeys;
  customerIsAgreeService: boolean | undefined;
}

export const ServiceAgreement: FC<Props> = ({ onChangeName, customerInfoKey, customerIsAgreeService }) => {

  useEffect(() => {
    onChangeName(customerInfoKey, true);
  }, [])

  const changeAgreement = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeName(customerInfoKey, !customerIsAgreeService)
  };

  return (
    <Container>
      <TitleContainer>
      <Title>이용약관</Title>
      <SubTitle>사용자 본인의 동의가 필요합니다.</SubTitle>
      </TitleContainer>
      <Blank height={1}/>
      <ArticleContianer>
        <br/>-주차대행서비스 이용약관-<br/>
        <br/>제 1조(서비스 범위) <br/>
        <br/>주차대행 서비스의 범위는 이용고객의 차량을 인수받아 주차장으로 이동시키며, 고객이 차량 인계를 요청시에 고객은 주차대행서비스 요금을 지불하며 당사는
        고객에게 차량을 인계한다.<br/>

        <br/>제 2조(서비스 제공의 시작과 종료)<br/>
        <br/>1. 고객이 주차대행 서비스 접수장소에서 차량보관증을 발급받는 시점부터 서비스 제공의 시작으로 한다.<br/>
        <br/>2. 서비스의 종료는 고객이 차량을 인계 받는 시점으로 한다.<br/>

        <br/>제 3조(서비스요금) 주차대행 서비스 요금은 당사가 홈페이에 명시된 내용으로 한다.<br/>

        <br/>제 4조(차량파손 및 손해배상)<br/>
        <br/>1.차량인수 시점(차량보관증 발급)부터 고객에게 인계 시점까지의 파손 및 손상이 당사의 과실이 명백한 경우 옥외주차장 관리규정 및 당사에서 가입한 영업 배상책임 보험약관에 준하여 배상한다.<br/>
        <br/>2.고객은 차량 인수시점에 차량의 파손 및 이상유무를 확인하여 차량사고로 인한 차량의 손상이 발생하였을 경우에는 서비스 지역인 인천공항 주차장에서 출발전 당사 담당직원에게 통보하여야만 하며,<br/>
        <br/>당사는 주차장에 주차하는 차량의 보관에 대하여 선관의무를 수행하고, 주차대행 서비스 중 발생한 차량사고에 대해서는 당사의 과실이 명백한 경우 주차대행 서비스 이용 약관에 의해 보상한다.<br/>
        <br/>3.다음 각 호의 경우에는 손해배상을 청구할 수 없다.<br/>
        <br/>ㄱ. 고객이 주차대행 서비스 지역을 출발한 이후 제기한 차량 손상
        <br/>ㄴ. 주차대행 서비스 의뢰시 이미 손상된 차량
        <br/>ㄷ. 일반적으로 확인이 어려운 분위의 미세한 긁힘 및 찍힘. 함몰 등
        <br/>ㄹ. 주차대행 접수 전 손상된 유리부분이 주차대행 중 자연적으로 확대가 되었을 경우
        <br/>ㅁ. 천재지변 및 자연적 마모에 따른 고장 및 훼손
        <br/>ㅂ. 수명소모 등에 의한 부분기계류 등의 고장
        <br/>ㅅ. 체크제외항목
        <br/>4.  차량사고 수리시 주차장보험 약관에 의하여 사용 대차를 제공하지 않습니다.<br/>

        <br/>제 5조(귀중품의 보관)<br/>
        <br/>현금, 유가증권, 기타 귀중품 등은 반드시 고객이 휴대하여야 하며, 귀중품의 분실 및 손상에 대해서는 손해배상을 청구할 수 없다.(블랙박스, 하이패스 등 포함)<br/>

        <br/>제 6조(개인 정보 수집 및 이용에 대한 안내)<br/>
        <br/>1. 회사가 개인정보를 수집하는 목적은 고객서비스를 제공하기 위함입니다.
        <br/>2. 회사는 개인정보를 제3자에게 제공하지 않습니다.

        <br/>제 7조 주차대행서비스 지연에 대한 보상 기준<br/>
        <br/>1. 서비스 이용객이 입구 시 접수증을 제시하여 차량 인도를 요청한 후 30분이상 차량 인도가 지연되는 경우 : 서비스 이용요금 환불<br/>
        <br/>2. 서비스 이용객이 입구 시 접수증을 제시하여 차량 인도를 요청한 후 1시간이상 차량 인도가 지연되는 경우 : 서비스 이용요금의 2배 보상<br/>
        <br/>3. 제 1호 및 제 2호의 경우라도 천재지변 등으로 항공의 운항 스케줄이 변경되어 이용객이 일시에 집중되는 경우,<br/>
        <br/>폭설/폭우 등 자연재해 및 이에 준하는 사태로 인하여 계약상대자가 차량 인도시간을 통제할수 없는 경우에는 책임을 면할 수 있다.<br/>

        <br/>제 8조(기타)<br/>
        <br/>1. 주차대행 서비스 이용고객은 차량 안전과 손상 여부 확인을 위해 사진촬영, 녹화(CCTV촬영)에 동의하며,
        사진 촬영이 되지 않는 부분(차량상부, 하부, 내부)의 손상에 대해서는 손해배상을 청구 할 수 없다.<br/>
        <br/>2. 고객차량의 보관장소는 옥외에 위치한 장기주차장이므로 자연적인 우천, 먼지 등으로 인한 차량외관, 타이어의 청결상태 유지는 불가능한 바,
        세차 등 외관관리에 대한 배상요청은 청구할 수 없다.<br/>

        <br/>*개인정보수집이용에 대해 서면 동의시에만 민원 및 사고자사를 할 수 있습니다.<br/>
        <br/>*차량접수시 새벽, 야간, 우천, 폭설, 안개 등 차량상태(돌맞음, 유리금),차량 사각부위(상.하.내부), 미세한 긁힘, 함몰, 차문 찍힘은 손해배상에서 제외됨을 고지 하였으며 이에 동의하고 서명합니다.<br/>
        <br/>*차량 내부의 귀중품은 손해배상 되지 않습니다.<br/>
      </ArticleContianer>
      <AgreementContainer>
        <AgreementTitle>약관의 내용을 모두 확인하였으며, 동의합니다.</AgreementTitle>
        <CheckboxInput 
          type='checkbox'
          checked={customerIsAgreeService ?? true}
          onChange={changeAgreement}
        />
      </AgreementContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 2vw;
`;

const SubTitle = styled.div`
  font-size: 1.5vw;
  display: flex;
  align-items: flex-end;
`;

const ArticleContianer = styled.div`
  border: 0.2vw solid ${color.gray_150};
  max-height: 15vw;
  overflow: scroll;
  font-size: 1.5vw;
`;

const AgreementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const AgreementTitle = styled.div`
  font-size: 1.5vw;
  padding-top: 0.5vw;
`;

const CheckboxInput = styled.input``;