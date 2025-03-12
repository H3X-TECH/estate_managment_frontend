import {
  PriceUnit,
  PropertyType,
  RentPricingType,
} from "~/lib/config/constants";

export const propertyTypeEnumToLabel = (type: PropertyType) => {
  switch (type) {
    case "APARTMENT":
      return "Apartment";
    case "CONDO":
      return "Condo";
    case "OFFICE":
      return "Office";
    case "LAND":
      return "Land";
    case "PENTHOUSE":
      return "Penthouse";
    case "VILLA":
      return "Villa";
    case "OTHER":
      return "Other";
  }
};

export const priceUnitEnumToLabel = (unit: PriceUnit) => {
  switch (unit) {
    case "DOLLAR":
      return "$";
    case "SGD":
      return "SGD";
    case "MMK":
      return "MMK";
    case "LAKH":
      return "Lakhs";
    case "THB":
      return "THB";
  }
};

export const rentPricingTypeEnumToLabel = (type: RentPricingType) => {
  switch (type) {
    case "PER_MONTH":
      return "mo";
    case "PER_YEAR":
      return "year";
  }
};
