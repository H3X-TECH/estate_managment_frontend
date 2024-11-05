import { fetcher } from "~/lib/fetcher";

export const signUpUser = async (payload: unknown) => {
  return fetcher("post", "/auth/sign-up", payload);
};

export const loginUser = async (payload: unknown) => {
  return await fetcher("post", "/auth/login", payload);
};
