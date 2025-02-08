import { fetcher } from "~/lib/fetcher";

export const signUpUser = async (payload: unknown) => {
  return fetcher("post", "/auth/sign-up", payload);
};

export const loginUser = async (payload: unknown) => {
  return await fetcher("post", "/auth/login", payload);
};

export const forgotPassword = async (payload: unknown) => {
  return fetcher("post", "/auth/forgot-password", payload);
};

export const resetPassword = async (token: string, payload: unknown) => {
  return fetcher("post", `/auth/reset-password/${token}`, payload);
};
