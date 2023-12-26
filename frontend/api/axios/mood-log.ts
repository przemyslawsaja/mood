import { apiClient } from '@/api/axios/index';
import { CreateMoodLogDto } from '@/api/types/mood-log';
import { ENDPOINTS } from '@/api/endpoints';

export const getMoodLogs = async (): Promise<any> => {
  const { data } = await apiClient.get('/mood-log');

  return data;
};

export const createMoodLog = async (payload: CreateMoodLogDto): Promise<void> => {
  const { data } = await apiClient.post(ENDPOINTS.MOOD_LOG_CREATE, payload);

  return data;
};

export const removeMoodLog = async (id: string): Promise<void> => {
  const { data } = await apiClient.delete(`${ENDPOINTS.MOOD_LOG_REMOVE}/${id}`);

  return data;
};
