import { fetcher } from "~/lib/fetcher";

export const createNewProperty = (payload: any) => {
  return fetcher("post", "/property/create", payload);
};
