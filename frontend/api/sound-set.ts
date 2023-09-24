import { apiClient } from "@/api/index";

export const getSoundSets = async (): Promise<any> => {
  const { data } = await apiClient.get("/sound-set");

  return data;
};
