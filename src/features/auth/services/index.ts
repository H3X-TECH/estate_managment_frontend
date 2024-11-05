import { fetcher } from "~/lib/fetcher";

export const signUpUser = async (payload: unknown) => {
  return fetcher("post", "/sign-up", payload);
};

export const loginUser = async (payload: unknown) => {
  return await fetcher("post", "/login", payload);
};
