import { useMutation, useQuery } from "@tanstack/react-query";
import { createNewProperty, getPropertyById } from "../services";
import {
  PropertyDetailResponse,
  type CreatePropertyPayload,
} from "~/models/property";
import { ApiResponse } from "~/models/shared";

export const useCreateNewProperty = () => {
  return useMutation({
    mutationFn: (payload: CreatePropertyPayload) => {
      return createNewProperty(payload);
    },
  });
};

export const useGetPropertyById = (id: string) => {
  return useQuery<ApiResponse<PropertyDetailResponse>>({
    queryKey: ["property", id],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
  });
};
