interface ApiResponse<TData> {
  data: TData;
  isSuccess: boolean;
  message: string;
  timestamp: number;
}

interface Property {
  id: string;
  title: string;
  description: string;
  type: any;
  location: string;
  sellPrice: number;
  rentPrice: number;
  isSell: boolean;
  availableDate: Date;
  isPerMonth: boolean;
  isPerYear: boolean;
  userId: string;
  bedRooms: number;
  bathRooms: number;
  totalBeds: number;
  totalArea: number;
  latitude: number;
  longitude: number;
  amenities: Array<{
    id: number;
    code: string;
    name: string;
  }>;
  attachments: Array<{
    attachmentId: string;
    fileName: string;
    filePath: string;
    fileExtension?: string;
    fileSize?: string;
  }>;
}

export type { ApiResponse, Property };
