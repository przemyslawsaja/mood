'use client';

import React, { ElementType, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { TopNavigation } from '@/components/top-navigation';
import { RoutePath } from '@/constants/routing';
import { useRouter } from 'next/navigation';
import { Well } from '@/components/well';
import { useSoundMixer } from '@/app/dashboard/sounds/hooks/use-sound-mixer';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const SSoundsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.XL)} {
      padding: 0 10rem;
    }
  `};
`;

const SDescription = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};
  margin: 1rem 0;
`;

const SPrimaryText = styled.span`
  color: ${({ theme }) => theme.COLOR.PRIMARY_200};
`;

export default function Page() {
  const {
    sounds, onSoundClick, onVolumeChange, reset,
  } = useSoundMixer();
  const { push } = useRouter();

  useEffect(() => reset(), []);

  const handleBack = () => {
    reset();
    push(RoutePath.DASHBOARD);
  };

  return (
    <div>
      <TopNavigation name="Sounds" onBack={handleBack} />
      <SDescription>
        Mix and match calming sounds to craft your
        <SPrimaryText>perfect learning or meditation ambiance. </SPrimaryText>
        Easily select from nature, ambient, and instrumental sounds,
        adjust volumes to your preference.
        Your serene, focused environment awaits in just a few taps 🧘‍ 🔊
      </SDescription>
      <SContainer>
        <SSoundsContainer>
          { sounds.map(([key, sound]) => (
            <Well
              key={key}
              icon={sound.icon as ElementType}
              title={sound.title}
              volume={sound.volume}
              onClick={() => onSoundClick(sound, key)}
              onVolumeChange={(event) => onVolumeChange(event, key, sound)}
              isActive={sound.volume > 0}
            />
          ))}
        </SSoundsContainer>
      </SContainer>
    </div>
  );
}
