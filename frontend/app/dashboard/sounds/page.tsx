'use client';

import React, { ElementType } from 'react';
import styled from 'styled-components';
import { TopNavigation } from '@/components/top-navigation';
import { RoutePath } from '@/constants/routing';
import { useRouter } from 'next/navigation';
import { Well } from '@/components/well';
import { useSoundMixer } from '@/app/dashboard/sounds/hooks/use-sound-mixer';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SSoundsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Page() {
  const { sounds, onSoundClick, onVolumeChange } = useSoundMixer();
  const { push } = useRouter();

  return (
    <div>
      <TopNavigation name="Sounds" onBack={() => push(RoutePath.DASHBOARD)} />
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
