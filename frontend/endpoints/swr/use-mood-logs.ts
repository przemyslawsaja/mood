import useSWR from 'swr';
import { getMoodLogs } from '@/endpoints/axios/mood-log';
import { MoodLogDto } from '@/endpoints/types/mood-log';
import { ENDPOINTS } from '../constants';

export const useMoodLogs = () => useSWR<MoodLogDto[]>(`${ENDPOINTS.MOOD_LOG}`, getMoodLogs);
