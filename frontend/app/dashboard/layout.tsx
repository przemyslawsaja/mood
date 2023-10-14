'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import BlueLight from '@/assets/images/blue.png';
import PinkLight from '@/assets/images/pink.png';
import { WizardProvider } from '@/modules/wizard/state/context';

const SBlueLight = styled(Image)`
  z-index: -1;
  position: fixed;
  top: 0;
  left: -5rem;
  width: 30rem;
  height: 30rem;
  transform: scale(2);

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      position: absolute;
    }
  `};
`;

const SPinkLight = styled(Image)`
  z-index: -1;
  position: fixed;
  top: -10rem;
  left: 10rem;
  width: 30rem;
  height: 30rem;
  transform: scale(2);

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      position: absolute;
    }
  `};
`;

const SContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem;
  overflow: hidden;
  position: relative;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      max-width: 100rem;
      padding: 5rem;
      overflow: visible;
      height: 100%;
    }
  `};
`;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SBlueLight src={BlueLight} alt="" />
      <SPinkLight src={PinkLight} alt="" />
      <SContainer>
        <WizardProvider>{children}</WizardProvider>
      </SContainer>
    </>
  );
}
