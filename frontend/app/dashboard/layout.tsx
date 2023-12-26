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

const SControls = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 2rem;
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
        <SControls>
          <SLogout onClick={() => signOut()}>
            <span>Logout</span>
            <SExitSvg color={COLOR.WHITE} />
          </SLogout>
        </SControls>
        <WizardProvider>{children}</WizardProvider>
      </SContainer>
    </>
  );
}
