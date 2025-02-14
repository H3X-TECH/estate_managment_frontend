import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserDataById, updateUserProfile } from "../services";
import type { ApiResponse } from "~/models/shared";
import type { UpdateUserProfilePayload, UserProfile } from "../models";
import { useAuthStore } from "~/stores/auth";

export const useGetUserProfile = () => {
  return useQuery<ApiResponse<UserProfile>>({
    queryKey: ["/profile"],
    queryFn: () => {
      return getUserDataById();
    },
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  const { userData } = useAuthStore();
  return useMutation({
    mutationFn: (data: UpdateUserProfilePayload) => {
      return updateUserProfile(
        (userData as Record<string, string>)?.id as string,
        data
      );
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["/profile"] });
    },
  });
};
