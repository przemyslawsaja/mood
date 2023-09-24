import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";
import { API_BASE_URL } from "@/constants/environment";
import { toast } from "react-hot-toast";
import { Error } from "@/types/api";
import { getSession } from "next-auth/react";

const onFulfilled = async (config: InternalAxiosRequestConfig) => {
  const session = await getSession();

  if (session) {
    config.headers["Authorization"] = `Bearer ${session.user.token}`;
  }

  return config;
};

const onError = (error: AxiosError<Error>) => {
  toast.error(error?.response?.data?.message || "Something went wrong");
  throw error;
};

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(onFulfilled);
apiClient.interceptors.response.use((response) => response, onError);
