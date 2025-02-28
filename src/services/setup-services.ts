import { fetcher } from "~/lib/api/fetcher";

export const getAllAmenities = () => {
  return fetcher("get", "/amenity/all");
};
