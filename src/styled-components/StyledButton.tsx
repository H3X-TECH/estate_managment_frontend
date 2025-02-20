import { extendVariants, Button } from "@heroui/react";

export const StyledButton = extendVariants(Button, {
  defaultVariants: {
    // radius: "lg",
    radius: "sm",
    color: "primary",
  },
});
