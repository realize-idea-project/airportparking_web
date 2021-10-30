/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import { ContactCard } from './ContactCard';
import { ScreenBreakPoint } from '../../../constants';

interface Props {
  imagelist: string[];
}

const { MobileS, MobileM, Desktop } = ScreenBreakPoint;

export const MainCarousel: FC<Props> = ({ imagelist }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <ContactCard />
      <CustomSlider {...settings} >
        {
          imagelist.map((path) => {
            return (
              <ImageContainer key={path}>
                <Image src={path} />
              </ImageContainer>
            );
          })
        }
      </CustomSlider>
    </>
  );
};


const CustomSlider = styled(Slider)`
  position: relative;

  .slick-list {
    height: 60vw;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
    z-index: -1;
  }

  .slick-dots {
    z-index: 1;

    @media only screen and (${ MobileS }) {
    bottom: 4vw;
  }

  @media only screen and (${ MobileM }) {
    bottom: 4vw;
    
  }

  @media only screen and (${ Desktop }) {
    display: none;
  }

  
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: white;

    @media only screen and (${ MobileS }) {
      /* font-size: 7px; */
      font-size: 2vw;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-height: 500px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

