import { fetcher } from "~/lib/fetcher";

export const getAllAmenities = () => {
  return fetcher("get", "/amenity/all");
};
