import { fetcher } from "~/lib/api/fetcher";

export const createNewProperty = (payload: any) => {
  return fetcher("post", "/property/create", payload);
};

export const getPropertyById = (id: string) => {
  return fetcher("get", `/property/${id}`);
};
