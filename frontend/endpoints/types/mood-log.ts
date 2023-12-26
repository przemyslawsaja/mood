import { MoodLogStatus } from '@/constants/mood-tracker';

export type MoodLogDto = {
  content: string,
  status: MoodLogStatus,
  createdAt: string
  _id: string
};

export type CreateMoodLogDto = {
  content: string,
  status: MoodLogStatus,
};
