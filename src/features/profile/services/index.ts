import { fetcher } from "~/lib/fetcher";

export const getUserDataById = () => {
  return fetcher("get", "/user/profile");
};
