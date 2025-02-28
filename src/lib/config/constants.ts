export const PROPERTY_TYPES_ENUM = [
  "HOUSE",
  "APARTMENT",
  "CONDO",
  "OFFICE",
  "LAND",
  "PENTHOUSE",
  "VILLA",
  "OTHER",
] as const;

export const PROPERTY_TYPES = [
  {
    value: "HOUSE",
    label: "House",
  },
  {
    value: "APARTMENT",
    label: "Apartment",
  },
  {
    value: "CONDO",
    label: "Condo",
  },
  {
    value: "OFFICE",
    label: "Office",
  },
  {
    value: "LAND",
    label: "Land",
  },
  {
    value: "PENTHOUSE",
    label: "Penthouse",
  },
  {
    value: "VILLA",
    label: "Villa",
  },
  {
    value: "OTHER",
    label: "Other",
  },
];

export type PropertyType = (typeof PROPERTY_TYPES_ENUM)[number];

export const PRICE_UNITS_ENUM = [
  "DOLLAR",
  "SGD",
  "MMK",
  "LAKH",
  "THB",
] as const;

export const PRICE_UNITS = [
  {
    value: "DOLLAR",
    label: "Dollar",
  },
  {
    value: "SGD",
    label: "SGD",
  },
  {
    value: "MMK",
    label: "MMK",
  },
  {
    value: "LAKH",
    label: "LAKH",
  },
  {
    value: "THB",
    label: "THB",
  },
];

export type PriceUnit = (typeof PRICE_UNITS_ENUM)[number];

export const RENT_PRICNG_TYPES_ENUM = [
  "PER_MONTH",
  "PER_WEEK",
  "PER_YEAR",
] as const;

export const RENT_PRICING_TYPES = [
  {
    value: "PER_MONTH",
    label: "Per Month",
  },
  {
    value: "PER_WEEK",
    label: "Per Week",
  },
  {
    value: "PER_YEAR",
    label: "Per Year",
  },
];

export type RentPricingType = (typeof RENT_PRICNG_TYPES_ENUM)[number];

export const APPOINTMENT_STATUS_ENUM = [
  "PENDING",
  "CONFIRMED",
  "CANCELLED",
] as const;

export const APPOINTMENT_STATUS = [
  {
    value: "PENDING",
    label: "Pending",
  },
  {
    value: "CONFIRMED",
    label: "Confirmed",
  },
  {
    value: "CANCELLED",
    label: "Cancelled",
  },
];

export type AppointmentStatus = (typeof APPOINTMENT_STATUS_ENUM)[number];
