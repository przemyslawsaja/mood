'use client';

import React, { ChangeEvent, ElementType } from 'react';
import { Well } from '@/components/well';
import { DEFAULT_VOLUME, SoundName } from '@/constants/sound-sets';
import { useMap } from 'usehooks-ts';
import styled from 'styled-components';
import { initialSoundsValues, Sound } from '@/app/dashboard/sounds/constants';
import { useSoundMixer } from '@/app/dashboard/sounds/hooks/use-sound-mixer';

const SSoundsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export default function Page() {
  const {
    onVolumeChange,
    onSoundClick,
    sounds,
  } = useSoundMixer();

  return (
    <div>
      <h1>Sounds Mixer</h1>
      <SSoundsContainer>
        { sounds.map(([key, sound]) => (
          <Well
            key={key}
            icon={sound.icon as ElementType}
            title={sound.title}
            volume={sound.volume * 100}
            onClick={() => onSoundClick(sound, key)}
            onVolumeChange={(event) => onVolumeChange(event, key, sound)}
            isActive={sound.volume > 0}
          />
        ))}
      </SSoundsContainer>
    </div>
  );
}
