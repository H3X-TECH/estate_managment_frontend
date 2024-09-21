import { type ClassValue, clsx } from "clsx";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const customToast = {
  error: (children: ReactNode) => {
    toast.error(children, {
      className: "text-red-500",
    });
  },
};
