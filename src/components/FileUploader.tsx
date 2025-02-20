import { Spinner } from "@heroui/react";
import { ImageUp } from "lucide-react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  selectedFiles?: Array<File>;
  onFileSelect: (files: Array<File>) => void;
  description?: string;
  isLoading?: boolean;
};

export default function FileUploader({
  onFileSelect,
  isLoading,
}: FileUploaderProps) {
  // const onDropFile = useCallback((acceptedFiles: Array<File>) => {
  //   onFileSelect(acceptedFiles);
  // }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop: onFileSelect,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="w-full relative overflow-hidden p-8 border-dashed flex flex-col items-center justify-center border-2 rounded-lg focus:border-primary"
    >
      <input {...getInputProps()} />
      <ImageUp size={48} strokeWidth={1} />
      <p className="text-sm text-stone-400">
        Drag 'n' drop or browse to upload photos. Please avoid using watermarked
        images as they will be rejected.
      </p>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-100 opacity-75">
          <Spinner />
        </div>
      )}
    </div>
  );
}
