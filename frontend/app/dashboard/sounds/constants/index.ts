import { SoundName } from '@/constants/sound-sets';
import FireSvg from '@/assets/icons/fire.svg';
import WaterfallSvg from '@/assets/icons/waterfall.svg';
import RainSvg from '@/assets/icons/rain.svg';
import BirdsSvg from '@/assets/icons/birds.svg';
import TrainSvg from '@/assets/icons/train.svg';
import SeaSvg from '@/assets/icons/sea.svg';
import FireSound from '@/assets/sounds/firepit.mp3';
import WaterfallSound from '@/assets/sounds/waterfall.mp3';
import BirdsSound from '@/assets/sounds/birds.mp3';
import RainSound from '@/assets/sounds/rain.mp3';
import SeaSound from '@/assets/sounds/sea.mp3';
import TrainSound from '@/assets/sounds/train.mp3';
import { MapOrEntries } from 'usehooks-ts';
import { Nullable } from '@/types/common';
import { ElementType } from 'react';

export type Sound = {
  icon: ElementType,
  title: string,
  volume: number,
  source: string,
  audio: Nullable<HTMLAudioElement>
};

const defaultAudioSettings: Pick<Sound, 'audio' | 'volume'> = {
  audio: null,
  volume: 0,
};

export const initialSoundsValues: MapOrEntries<SoundName, Sound> = ([
  [SoundName.FIRE_PIT, {
    icon: FireSvg, title: 'Fire pit', source: FireSound, ...defaultAudioSettings,
  }],
  [SoundName.WATERFALL, {
    icon: WaterfallSvg, title: 'Waterfall', source: WaterfallSound, ...defaultAudioSettings,
  }],
  [SoundName.SEA, {
    icon: SeaSvg, title: 'Sea', source: SeaSound, ...defaultAudioSettings,
  }],
  [SoundName.RAIN, {
    icon: RainSvg, title: 'Rain', source: RainSound, ...defaultAudioSettings,
  }],
  [SoundName.BIRDS, {
    icon: BirdsSvg, title: 'Birds', source: BirdsSound, ...defaultAudioSettings,
  }],
  [SoundName.TRAIN, {
    icon: TrainSvg, title: 'Train', source: TrainSound, ...defaultAudioSettings,
  }],
]);

export const initialMixerSoundsValues: Record<SoundName, Sound> = {
  [SoundName.FIRE_PIT]: {
    icon: FireSvg, title: 'Fire pit', source: FireSound, ...defaultAudioSettings,
  },
  [SoundName.WATERFALL]: {
    icon: WaterfallSvg, title: 'Waterfall', source: WaterfallSound, ...defaultAudioSettings,
  },
  [SoundName.SEA]: {
    icon: SeaSvg, title: 'Sea', source: SeaSound, ...defaultAudioSettings,
  },
  [SoundName.RAIN]: {
    icon: RainSvg, title: 'Rain', source: RainSound, ...defaultAudioSettings,
  },
  [SoundName.BIRDS]: {
    icon: BirdsSvg, title: 'Birds', source: BirdsSound, ...defaultAudioSettings,
  },
  [SoundName.TRAIN]: {
    icon: TrainSvg, title: 'Train', source: TrainSound, ...defaultAudioSettings,
  },
};
