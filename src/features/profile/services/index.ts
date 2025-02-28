import { fetcher } from "~/lib/api/fetcher";
import type { UpdateUserProfilePayload } from "../models";

export const getUserDataById = () => {
  return fetcher("get", "/user/profile");
};

export const updateUserProfile = (
  id: string,
  data: UpdateUserProfilePayload
) => {
  return fetcher("put", `/user/update-profile/${id}`, data);
};
