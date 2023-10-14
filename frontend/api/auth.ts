import { apiClient } from "@/api";

export type UserDto = {
  name: string;
  email: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpDto = {
  name: string;
} & SignInPayload;

export type SignInDto = {
  token: string;
} & UserDto;

export const apiSignIn = async (payload: SignInPayload): Promise<SignInDto> => {
  const { data } = await apiClient.post("/auth/login", payload);

  return data;
};

export const apiSignUp = async (payload: SignUpDto): Promise<{ token: string }> => {
  const { data } = await apiClient.post("/auth/signup", payload);

  return data;
};
