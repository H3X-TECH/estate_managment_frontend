import { extendVariants, Button } from "@nextui-org/react";

export const StyledButton = extendVariants(Button, {
	defaultVariants: {
		radius: "full",
		color: "primary",
	},
});
