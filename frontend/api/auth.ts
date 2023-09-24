import { apiClient } from "@/api";

export type UserDto = {
  name: string;
  email: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignInDto = {
  token: string;
} & UserDto;

export const apiSignIn = async (payload: SignInPayload): Promise<SignInDto> => {
  const { data } = await apiClient.post("/auth/login", payload);

  return data;
};
