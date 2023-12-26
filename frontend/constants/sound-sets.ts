export const DEFAULT_VOLUME = 0.5;

export enum SoundName {
  WATERFALL = 'waterfall',
  SEA = 'sea',
  TRAIN = 'train',
  FIRE_PIT = 'firePit',
  BIRDS = 'birds',
  RAIN = 'rain',
}

export const DEFAULT_VOLUMES: Record<SoundName, number> = {
  [SoundName.WATERFALL]: 0,
  [SoundName.SEA]: 0,
  [SoundName.TRAIN]: 0,
  [SoundName.FIRE_PIT]: 0,
  [SoundName.BIRDS]: 0,
  [SoundName.RAIN]: 0,
};
