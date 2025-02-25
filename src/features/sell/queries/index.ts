import { useMutation } from "@tanstack/react-query";
import { createNewProperty } from "../services";
import type { CreatePropertyPayload } from "~/models/property";

export const useCreateNewProperty = () => {
  return useMutation({
    mutationFn: (payload: CreatePropertyPayload) => {
      return createNewProperty(payload);
    },
  });
};
