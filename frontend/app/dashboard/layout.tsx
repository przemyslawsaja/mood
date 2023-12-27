'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import BlueLight from '@/assets/images/blue.png';
import PinkLight from '@/assets/images/pink.png';
import ExitSvg from '@/assets/icons/exit.svg';
import { WizardProvider } from '@/modules/wizard/state/context';
import { COLOR } from '@/theme/styles/color';
import { signOut } from 'next-auth/react';
import { hexWithAlpha } from '@/utils/styles';

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
  padding: 2rem;
  overflow: hidden;
  position: relative;
  margin: 3rem auto;
  
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      max-width: 100rem;
      padding: 5rem;
      overflow: visible;
      height: 100%;
      margin: auto;
    }
  `};
`;

const SLogo = styled.h1`
  font-size: ${({ theme }) => theme.FONT.SIZE.LG};
`;

const SDesktopHeader = styled.div`
  justify-content: end;
  width: 100%;
  display: none;
    
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      display: flex;
    }
  `};
`;

const SMobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => hexWithAlpha(theme.COLOR.NIGHTFALL_300, 60)};
  backdrop-filter: blur(0.5rem);
  
  box-shadow: ${({ theme }) => theme.SHADOW.PRIMARY_GLOW};
  z-index: ${({ theme }) => theme.Z_INDEX.HIGHER};
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      display: none;
    }
  `};
`;

const SLogout = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.COLOR.PRIMARY_200};
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT.SIZE.LG};

  span,
  svg {
    transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  }

  &:hover {
    span,
    svg {
      color: ${({ theme }) => theme.COLOR.PRIMARY_300};
    }
  }
`;

const SExitSvg = styled(ExitSvg)`
  transform: scale(0.8);
  color: ${({ theme }) => theme.COLOR.PRIMARY_200};
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
        <SMobileHeader>
          <SLogo>mood.</SLogo>
          <SLogout onClick={() => signOut()}>
            <SExitSvg color={COLOR.WHITE} />
          </SLogout>
        </SMobileHeader>
        <SDesktopHeader>
          <SLogout onClick={() => signOut()}>
            <SExitSvg color={COLOR.WHITE} />
          </SLogout>
        </SDesktopHeader>

        <WizardProvider>{children}</WizardProvider>
      </SContainer>
    </>
  );
}
