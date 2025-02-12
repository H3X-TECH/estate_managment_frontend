import { useQuery } from "@tanstack/react-query";
import { getUserDataById } from "../services";

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["/profile"],
    queryFn: () => {
      return getUserDataById();
    },
  });
};
