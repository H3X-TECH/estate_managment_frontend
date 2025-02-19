import { useMutation } from "@tanstack/react-query";
import { createNewProperty } from "../services";

export const useCreateNewProperty = () => {
  return useMutation({
    mutationFn: (payload: any) => {
      return createNewProperty(payload);
    },
  });
};
