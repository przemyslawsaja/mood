'use client';

import styled from 'styled-components';
import Image from 'next/image';
import BlueLight from '@/assets/images/blue.png';
import PinkLight from '@/assets/images/pink.png';
import React from 'react';
import { Loader } from '@/components/loader';

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SBlueLight = styled(Image)`
  z-index: -1;
  position: absolute;
  top: 0;
  left: -5rem;
  width: 30rem;
  height: 30rem;
  transform: scale(2);
`;

const SPinkLight = styled(Image)`
  z-index: -1;
  position: absolute;
  top: -10rem;
  left: 10rem;
  width: 30rem;
  height: 30rem;
  transform: scale(2);
`;

export default function Loading() {
  return (
    <SContainer>
      <SBlueLight src={BlueLight} alt="" />
      <SPinkLight src={PinkLight} alt="" />
      <Loader />
    </SContainer>
  );
}
