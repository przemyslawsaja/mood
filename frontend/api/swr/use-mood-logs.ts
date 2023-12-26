import useSWR from 'swr';
import { ENDPOINTS } from '@/api/endpoints';
import { getMoodLogs } from '@/api/axios/mood-log';
import { MoodLogDto } from '@/api/types/mood-log';

export const useMoodLogs = () => useSWR<MoodLogDto[]>(`${ENDPOINTS.MOOD_LOG}`, getMoodLogs);
