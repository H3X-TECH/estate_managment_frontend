import supabaseClient from "./supabaseClient";
import { v4 as uuidv4 } from "uuid";

export const uploadFile = async (file: File) => {
  const uniqueFileName = `${uuidv4()}_${file.name}`;
  const { data, error } = await supabaseClient.storage
    .from("property_attachments")
    .upload(uniqueFileName, file);

  if (error) {
    throw error;
  }

  const {
    data: { publicUrl },
  } = getFileUrl(data.path);

  return {
    fileName: uniqueFileName,
    filePath: publicUrl,
    fileKey: data.id,
  };
};

export const getFileUrl = (
  assetName: string,
  options?: {
    download: string | boolean;
    transform: Record<string, number>;
  }
) => {
  return supabaseClient.storage
    .from("property_attachments")
    .getPublicUrl(assetName, options);
};

export const removeFile = (filePath: string) => {
  return supabaseClient.storage.from("property_attachments").remove([filePath]);
};
