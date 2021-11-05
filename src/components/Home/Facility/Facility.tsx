import React, { FC } from 'react';
import styled from 'styled-components';
import { images } from '../../../constants/images';
import { Blank } from '../../common';
import { HomeFacilityContainer } from '../styled';
import { FacilityHeader } from './FacilityHeader'

export const Facility = () => {
  return (
    <HomeFacilityContainer transparent absolute zIndex={1} >
      <Blank height={5} />
      <FacilityHeader subTitle='라라주차 김포 주차시설' onClickShowMore={() => null}/>
      {/* <Blank height={30} /> */}
    </HomeFacilityContainer>
  );
};
