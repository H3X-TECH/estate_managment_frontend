import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetcher } from "~/lib/fetcher";
import { ApiResponse } from "~/models/shared";
import { useAuthStore } from "~/stores/auth";

export const useSetUserData = () => {
  const { setUserData } = useAuthStore();

  const { data, error } = useQuery<ApiResponse<any>>({
    queryKey: ["user-profile"],
    queryFn: () => {
      return fetcher("get", "/user/profile");
    },
  });

  useEffect(() => {
    if (data?.data && !error) {
      setUserData(data.data);
    }
  }, [data, setUserData]);

  return null;
};
