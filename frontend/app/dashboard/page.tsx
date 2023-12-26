'use client';

import styled, { css } from 'styled-components';
import BlueLight from '@/assets/images/blue.png';
import PinkLight from '@/assets/images/pink.png';
import Image from 'next/image';
import { Well } from '@/components/well';
import MeditateSvg from '@/assets/icons/meditate.svg';
import SoundSvg from '@/assets/icons/sound.svg';
import BookSvg from '@/assets/icons/book.svg';
import { useState } from 'react';
import { Button } from '@/components/button';
import { RoutePath } from '@/constants/routing';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Loader } from '@/components/loader';
import { SessionStatus } from '@/constants/browser';

const SHeader = styled.h1`
  margin: 0;
  
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      padding-top: 0rem;
    }
  `};
`;

const SDescription = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};
  margin-top: 1rem;
  
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      margin-bottom: 5rem;
    }
  `};
`;

const SWrapper = styled.div`
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      justify-content: center;
    }
  `};
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

const SWellContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 5rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      flex-direction: row;
      height: 15rem;
      gap: 8rem;
    }
  `};
`;

const SFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      margin-top: 8rem;
    }
  `};
`;

const SName = styled.span`
  color: ${({ theme }) => theme.COLOR.PRIMARY_300};
  margin-left: 0.5rem;
`;

const SButton = styled(Button)`
  max-width: 15rem;
`;

const SJourneySpan = styled.span`
  color: ${({ theme }) => theme.COLOR.PRIMARY_200};
  margin-left: 0.2rem;
`;

export default function Page() {
  const { push } = useRouter();
  const { data: session, status } = useSession();
  const [activeWellPath, setActiveWellPath] = useState<RoutePath>(
    RoutePath.MEDITATION,
  );

  if (status === SessionStatus.Loading) {
    return <Loader isLoading />;
  }

  return (
    <>
      <SWrapper>
        <SHeader>
          Hello
          <SName>
            {session?.user.name}
          </SName>
          ,
        </SHeader>
        <SHeader>Where will your mind take you today?</SHeader>
        <SDescription>
          Welcome to our mindful oasis! 🌿 Take a moment to reflect on your mood
          <br />
          and choose your path to inner balance.
          <SJourneySpan>Your journey begins here.</SJourneySpan>
        </SDescription>
        <SBlueLight src={BlueLight} alt="" />
        <SPinkLight src={PinkLight} alt="" />
        <SWellContainer>
          <Well
            icon={SoundSvg}
            resizeOnActive
            title="Sounds"
            isActive={activeWellPath === RoutePath.SOUNDS}
            onClick={() => setActiveWellPath(RoutePath.SOUNDS)}
          />
          <Well
            icon={MeditateSvg}
            resizeOnActive
            title="Meditation"
            isActive={activeWellPath === RoutePath.MEDITATION}
            onClick={() => setActiveWellPath(RoutePath.MEDITATION)}
          />
          <Well
            icon={BookSvg}
            resizeOnActive
            title="Tracker"
            isActive={activeWellPath === RoutePath.MOOD_TRACKER}
            onClick={() => setActiveWellPath(RoutePath.MOOD_TRACKER)}
          />
        </SWellContainer>
        <SFooter>
          <SButton onClick={() => push(activeWellPath)}> Continue </SButton>
        </SFooter>
      </SWrapper>
    </>
  );
}
