import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "~/models/shared";
import { getAllAmenities } from "~/services/setup-services";

export const useGetAllAmenities = () => {
  return useQuery<ApiResponse<any[]>>({
    queryKey: ["/amenities"],
    queryFn: () => {
      return getAllAmenities();
    },
  });
};
