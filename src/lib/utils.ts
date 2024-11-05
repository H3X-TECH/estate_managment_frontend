import { type ClassValue, clsx } from "clsx";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import supabaseClient from "./supabase";

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

export const uploadFile = async (file: File) => {
  const { data, error } = await supabaseClient.storage
    .from("attachments")
    .upload(file.name, file);

  if (error) {
    throw error;
  }

  return data.fullPath;
};

export const getFileUrl = (
  assetName: string,
  options?: {
    download: string | boolean;
    transform: Record<string, number>;
  }
) => {
  return supabaseClient.storage
    .from("attachments")
    .getPublicUrl(assetName, options);
};
