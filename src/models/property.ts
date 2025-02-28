import type {
  PriceUnit,
  PropertyType,
  RentPricingType,
} from "~/lib/config/constants";
import { UserResponse } from "./user";
import { Amenity } from "./amenity";
import { Appointment } from "./appointment";

// {
//   "propertyId": "cm7kttxx00000z5ejhao4mezv",
//   "listingType": "RENT",
//   "code": "dolorum-vorago-ventosus-in",
//   "title": "Property 1 abstergo substantia delectus",
//   "description": "Crinis stultus aurum virga cohors derelinquo decretum adstringo colo. Apud antepono tollo aspernatur autem ab caries calculus. Acsi facere illum arca tergo triumphus victoria comis bibo apud.\nAngustus sulum tergiversatio absque strenuus subvenio abutor defetiscor. Casus vehemens arbor. Ad aduro voluptatem.\nNecessitatibus sono vehemens textus crustulum alter angulus. Quis alter commodo acsi denego tutamen cerno vix conforto utrum. Antea color torqueo usus crepusculum.\nTotidem nostrum venia acervus recusandae asperiores pariatur ventus. Consequuntur volo artificiose. Praesentium amplitudo confugo valetudo tubineus vorago spargo pauci.\nCarpo timor ars. Alias comedo demonstro admoneo est usitas demulceo absens damno. Statim carcer defero amplus tabesco.",
//   "type": "OFFICE",
//   "location": "Waco, Falkland Islands (Malvinas) Felicia River",
//   "sellPrice": 80,
//   "rentPrice": 61,
//   "priceUnit": "LAKH",
//   "rentPricing": "PER_MONTH",
//   "availableDate": "2025-02-25T18:35:15.823Z",
//   "isVerified": false,
//   "isFeatured": false,
//   "isBlocked": false,
//   "bedRooms": 1,
//   "bathRooms": 10,
//   "totalArea": 812,
//   "latitude": -28.0154,
//   "longitude": -168.274,
//   "userId": "cm7gjcr5m0001y39qgyrk05pc",
//   "createdAt": "2025-02-25T18:35:15.828Z",
//   "updatedAt": "2025-02-25T18:35:15.828Z",
//   "user": {
//     "userId": "cm7gjcr5m0001y39qgyrk05pc",
//     "firstName": "Admin",
//     "lastName": "One",
//     "avatarUrl": null,
//     "code": null,
//     "role": "user",
//     "preferName": null,
//     "phoneNumber": null,
//     "location": null,
//     "status": null,
//     "isComplete": false,
//     "isBlocked": false,
//     "accountId": "cm7gjcr5l0000y39qe9f97wpo",
//     "createdAt": "2025-02-22T18:30:53.050Z",
//     "updatedAt": "2025-02-22T18:30:53.050Z"
//   },

export type PropertyResponse = {
  propertyId: string;
  listingType: string;
  code: string;
  title: string;
  description: string;
  type: PropertyType;
  location: string;
  sellPrice: number;
  rentPrice: number;
  priceUnit: PriceUnit;
  rentPricing: RentPricingType;
  availableDate: string;
  isVerified: boolean;
  isFeatured: boolean;
  isBlocked: boolean;
  bedRooms: number;
  bathRooms: number;
  totalArea: number;
  latitude: number;
  longitude: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: UserResponse;
  attachments: Array<{
    fileName: string;
    filePath: string;
  }>;
};

export type PropertyDetailResponse = PropertyResponse & {
  amenities: Array<Amenity>;
  appointments: Array<Appointment>;
};

export type CreatePropertyImagePayload = {
  fileName: string;
  filePath: string;
  fileExtension?: string;
  fileSize?: number;
};

export type CreatePropertyPayload = {
  title: string;
  description: string;
  type: PropertyType;
  location: string;
  sellPrice: number;
  rentPrice: number;
  priceUnit: PriceUnit;
  rentPricing: RentPricingType;
  availableDate: Date;
  userId: string;
  bedRooms: number;
  bathRooms: number;
  totalArea: number;
  latitude: number;
  longitude: number;
  amenities: Array<number>;
  attachments: Array<CreatePropertyImagePayload>;
};
