import { useNavigate, useRoutes } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import routesList from "./RoutesList";
import { useQuery } from "@tanstack/react-query";
import type { ApiResponse, UserProfile } from "~/models/shared";
import { fetcher } from "~/lib/fetcher";
import { useEffect } from "react";
import { useAuthStore } from "~/stores/auth";

const useGetUserProfile = () => {
  return useQuery<ApiResponse<UserProfile>>({
    queryKey: ["user-profile"],
    queryFn: () => {
      return fetcher("get", "/user/profile");
    },
  });
};

const RouterEntry = () => {
  const router = useRoutes(routesList);
  const navigate = useNavigate();
  const { setUserData } = useAuthStore();
  const { data } = useGetUserProfile();

  useEffect(() => {
    if (data?.data) {
      setUserData(data.data);
    }
  }, [data, setUserData]);

  return <HeroUIProvider navigate={navigate}>{router}</HeroUIProvider>;
};

export default RouterEntry;
