interface ApiResponse<TData> {
  data: TData;
  isSuccess: boolean;
  message: string;
  timestamp: number;
}

type PagingResponse<TData> = {
  list: Array<TData>;
  page: number;
  limit: number;
  totalCount: number;
};

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

interface UserProfile {
  userId: string;
  accountId: string;
  email: string;
  firstName: string;
  lastName: string;
  preferName: string;
  phoneNumber: string;
  avatarUrl: string;
  location: string;
  role: string;
  isBlocked: boolean;
  createdAt: Date;
}

export type { ApiResponse, Property, UserProfile, PagingResponse };
