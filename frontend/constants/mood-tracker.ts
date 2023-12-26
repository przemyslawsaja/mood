import { StaticImageData } from 'next/image';
import AngryPng from '@/assets/images/angry.png';
import HappyPng from '@/assets/images/happy.png';
import NeutralPng from '@/assets/images/neutral.png';
import SadPng from '@/assets/images/sad.png';

export enum MoodLogStatus {
  HAPPY = 'happy',
  NEUTRAL = 'neutral',
  SAD = 'sad',
  ANGRY = 'angry',
}

export const MoodImageMap: Record<MoodLogStatus, StaticImageData> = {
  [MoodLogStatus.HAPPY]: HappyPng,
  [MoodLogStatus.SAD]: SadPng,
  [MoodLogStatus.ANGRY]: AngryPng,
  [MoodLogStatus.NEUTRAL]: NeutralPng,
};
