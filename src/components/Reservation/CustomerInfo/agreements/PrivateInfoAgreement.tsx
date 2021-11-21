import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Blank } from '../../../common';
import { color } from '../../../../constants'
import { ChangeEvent } from '../../../../types';
import { CustomerInfoKeys } from '../../../../pages/Reservation/useCustomerInfo';

interface Props {
  onChangeName: (key: CustomerInfoKeys, value: boolean) => void;
  customerInfoKey: CustomerInfoKeys;
  customerIsAgreePrivate: boolean | undefined;
}

export const PrivateInfoAgreement: FC<Props> = ({ onChangeName, customerInfoKey, customerIsAgreePrivate }) => {

  useEffect(() => {
    onChangeName(customerInfoKey, true);
  }, [])

  const changeAgreement = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeName(customerInfoKey, !customerIsAgreePrivate)
  };

  return (
    <Container>
      <TitleContainer>
      <Title>개인정보처리방침</Title>
      <SubTitle>사용자 본인의 동의가 필요합니다.</SubTitle>
      </TitleContainer>
      <Blank height={1}/>
      <ArticleContianer>
        <br/>1. 총칙<br/>
        
        <br/>라라주차는 이용자들의 개인정보보호를 매우 중요시하며, 이용자가 회사의 서비스를 이용함과 동시에 온라인상에서 제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다. 이에 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정 및 정보통신부가 제정한 개인정보보호지침을 준수하고 있습니다.<br/>
        
        <br/>에제이파크는 개인정보 취급방침을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있지 알려 드립니다.<br/>
        
        <br/>회사의 개인정보 취급방침은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른 개인정보 취급방침의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 그리고 개인정보 취급방침을 개정하는 경우나 개인정보 취급방침 변경될 경우 주차대행 홈페이지 첫 페이지의 개인정보취급방침을 통해 고지하고 있습니다. 이용자들께서는 사이트 방문 시 수시로 확인하시기 바랍니다.<br/>
        
        <br/>2. 개인정보의 수집목적 및 이용목적<br/>
        <br/>개인정보라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 휴대폰번호 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.<br/>
        
        <br/>다음과 같은 목적으로 이용자 개인의 정보를 수집, 이용하고 있습니다. 
        <br/>- 성명, 휴대폰번호: 차량인계, 불만처리 등을 위한 원활한 의사소통 경로의 확보
        <br/>- 차량번호 : 주차대행 대상이 되는 차량을 식별하기 위함
        <br/>- 입국일시: 입국 예정일에 원활한 차량인도를 위하기 위함
        <br/>- 항공편: 정확한 입국 예정일을 확인하기 위함(항공편 연착 등)
        <br/>- 차량정보: 주차대행 대상이 되는 차량을 효과적으로 식별하기 위함<br/>
        
        <br/>기타 위 수집된 정보를 이용하여 서비스 제공에 관한 계약이행 및 요금정산에 활용하고 있습니다.<br/>
        
        <br/>3. 수집하는 개인정보 항목 및 수집방법<br/>
        <br/>라라주차는 이용자들이 원활한 서비스를 이용하기 위해 성명, 휴대폰번호, 차량번호, 입국일시 정보들을 온라인상에서 입력 받고 있습니다.<br/>
        
        <br/>5. 개인정보의 보유기간 및 이용기간<br/>
        <br/>이용자가 회사에 제공하는 서비스를 이용하는 동안 라라주차는 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다. 다만, 이용자 본인이 직접 삭제 요청한 경우에는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다 그리고 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 라라주차는 관계법령에서 정한 일정한 기간 동안 예약자정보를 보관합니다. 이 경우 라라주차는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.<br/>
        
        <br/>- 계약 또는 청약철회 등에 관한 기록 : 5년
        <br/>- 대금결제 및 재화 등의 공급에 관한 기록 : 5년
        <br/>- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
        
        <br/>라라주차는 귀중한 이용자의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.<br/>
        <br/>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br/>
      </ArticleContianer>
      <AgreementContainer>
        <AgreementTitle>개인정보처리방침 내용을 모두 확인하였으며 동의합니다.</AgreementTitle>
        <CheckboxInput 
          type='checkbox'
          checked={customerIsAgreePrivate ?? true}
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

const CheckboxInput = styled.input`
  
`;