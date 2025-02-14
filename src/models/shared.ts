interface ApiResponse<TData> {
  data: TData;
  isSuccess: boolean;
  message: string;
  timestamp: number;
}

export type { ApiResponse };
