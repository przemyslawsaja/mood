import { DEFAULT_VOLUMES, DEFAULT_VOLUME, SoundName } from '@/constants/sound-sets';
import { initialSoundsValues, Sound } from '@/app/dashboard/sounds/constants';
import { ChangeEvent } from 'react';
import { useMap, MapOrEntries } from 'usehooks-ts';

export const useSoundMixer = () => {
  const [soundsMap, actions] = useMap<SoundName, Sound>(initialSoundsValues);

  const sounds: MapOrEntries<SoundName, Sound> = Array.from(soundsMap.entries());

  const disableSound = (sound: Sound, key: SoundName): void => {
    sound.audio?.pause();
    actions.set(key, { ...sound, volume: 0 });
  };

  const onSoundClick = async (sound: Sound, key: SoundName): Promise<void> => {
    const audioElement = new Audio(sound.source);
    const existingSound = soundsMap.get(key);
    const isSoundActive = existingSound?.audio && existingSound.volume > 0;

    if (isSoundActive) {
      disableSound(sound, key);
      return;
    }

    audioElement.volume = DEFAULT_VOLUME;
    audioElement.loop = true;
    actions.set(key, { ...sound, audio: audioElement, volume: DEFAULT_VOLUME });

    await audioElement.play();
  };

  const onVolumeChange = async (
    e: ChangeEvent<HTMLInputElement>,
    key: SoundName,
    sound: Sound,
  ): Promise<void> => {
    e.stopPropagation();
    const existingSound = soundsMap.get(key);

    const volume = parseInt(e.target.value, 10) / 100;

    if (existingSound?.audio) {
      existingSound.audio.volume = volume;
    }

    actions.set(key, { ...sound, volume });
  };

  const reset = (): void => {
    actions.setAll(initialSoundsValues);
    soundsMap.forEach((sound) => sound.audio?.pause());
  };

  const getVolumes = () => {
    const volumes = DEFAULT_VOLUMES;

    sounds.forEach(([key, sound]) => {
      volumes[key] = sound.volume;
    });

    return volumes;
  };

  return {
    onVolumeChange,
    onSoundClick,
    sounds,
    reset,
    getVolumes,
  };
};
