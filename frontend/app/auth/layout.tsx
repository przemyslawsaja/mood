'use client';

import BlueLight from '@/assets/images/blue.png';
import PinkLight from '@/assets/images/pink.png';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { RoutePath } from '@/constants/routing';
import ArrowForwardSvg from '@/assets/icons/arrow-forward.svg';
import { COLOR } from '@/theme/styles/color';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { SessionStatus } from '@/constants/browser';
import { useRouter } from 'next/navigation';

const SBlueLight = styled(Image)`
  z-index: -1;
  position: fixed;
  top: 5rem;
  width: 100%;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      top: 5%;
      transform: rotate(5deg) scale(1.2);
    }
  `};
`;

const SPinkLight = styled(Image)`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 50%;
  top: 7rem;
  right: -5rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      top: 40%;
      opacity: 0.8;
      transform: rotate(5deg) scale(1.5);
    }
  `};
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      justify-content: center;
    }
  `};
`;

const SLogo = styled.h1`
  opacity: 0.5;
  font-size: ${({ theme }) => theme.FONT.SIZE.XL5};

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      padding-top: 0rem;
    }
  `};
`;

const SLink = styled(Link)`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.COLOR.GRAY_400};
  display: flex;
  align-items: center;
  justify-items: center;
  align-self: center;
`;

const SArrowForwardSvg = styled(ArrowForwardSvg)`
  transform: scale(0.5);
`;

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (status === SessionStatus.Authenticated) {
      push(RoutePath.DASHBOARD);
    }
  }, [status]);

  return (
    <>
      <SBlueLight src={BlueLight} alt="" />
      <SPinkLight src={PinkLight} alt="" />
      <SContainer>
        <SLogo>mood.</SLogo>
        {children}
      </SContainer>
    </>
  );
}
