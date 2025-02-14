import { extendVariants, Input } from "@heroui/react";

export const StyledInput = extendVariants(Input, {
  defaultVariants: {
    size: "md",
    variant: "bordered",
  },
});
