import { Divider, Image } from "@heroui/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./EmblaCarousel";
import {
  Bath,
  Bed,
  Clock4Icon,
  Heart,
  House,
  MapPin,
  SquareDashedBottom,
} from "lucide-react";
import {
  PriceUnit,
  PropertyType,
  RentPricingType,
} from "~/lib/config/constants";
import {
  priceUnitEnumToLabel,
  propertyTypeEnumToLabel,
  rentPricingTypeEnumToLabel,
} from "~/lib/mappers";
import { formatDistanceToNow } from "date-fns";

type PropertyCardProps = {
  title: string;
  price: number;
  priceUnit: PriceUnit;
  pricingType: RentPricingType;
  location: string;
  type: PropertyType;
  bedRooms: number;
  bathRooms: number;
  totalArea: number;
  images: Array<{
    fileName: string;
    filePath: string;
  }>;
  listedBy: string;
  postedAt: string;
};

export default function PropertyCard(props: PropertyCardProps) {
  const {
    title,
    price,
    priceUnit,
    pricingType,
    location,
    type,
    bedRooms,
    bathRooms,
    totalArea,
    images,
    listedBy,
    postedAt,
  } = props;
  return (
    <div className="w-full cursor-pointer shadow-sm rounded-lg hover:shadow-lg transition-all overflow-hidden relative bg-stone-50 border group">
      <section className="overflow-hidden w-full">
        <Carousel>
          <CarouselContent>
            {images.map((img) => {
              return (
                <CarouselItem key={img.fileName}>
                  <Image
                    classNames={{
                      wrapper: "w-full h-[240px] rounded-none",
                      img: "w-full h-[240px] object-cover rounded-none object-center",
                    }}
                    src={img.filePath}
                    alt={img.fileName}
                    width={500}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden group-hover:inline-flex" />
          <CarouselNext className="hidden group-hover:inline-flex" />
        </Carousel>
      </section>
      <div className="py-4 px-3 gap-2 flex flex-col">
        <div>
          <div className="space-y-1.5">
            <h4 className="text-lg font-semibold">{title}</h4>
            <div className="flex items-center">
              <h6 className="text-base font-medium">
                {price} {priceUnitEnumToLabel(priceUnit)}&nbsp;
              </h6>
              <h6 className="text-base font-medium">
                / {rentPricingTypeEnumToLabel(pricingType)}
              </h6>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <h6 className="text-base">{location}</h6>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <House size={18} />
                <span className="text-sm">{propertyTypeEnumToLabel(type)}</span>
              </div>
              <Divider orientation="vertical" className="h-5" />
              <div className="flex items-center gap-1">
                <Bed size={18} />
                <span className="text-sm">{bedRooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath size={18} />
                <span className="text-sm">{bathRooms}</span>
              </div>
              <Divider orientation="vertical" className="h-5" />
              <div className="flex items-center gap-1">
                <SquareDashedBottom size={18} />
                <span className="text-sm">{totalArea} sqft</span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-content3-foreground">
                  Listed by&nbsp;
                </span>
                <span className="text-sm">{listedBy}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock4Icon size={14} />
                <span className="text-xs text-content3-foreground">
                  {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
                </span>
              </div>
            </div>
          </div>
          <div>
            {/* <StyledButton isIconOnly size="sm" variant="light" color="danger">
              <Heart size={24} />
            </StyledButton> */}
          </div>
        </div>
      </div>
      {/* <div className="absolute top-2 right-2 flex items-center gap-2">
        <Chip color="warning" size="sm">
          Featured
        </Chip>
        <Chip color="success" size="sm">
          Available Now
        </Chip>
      </div> */}
      <Heart
        size={24}
        className="absolute top-3 right-3 hover:fill-rose-500 stroke-slate-100 transition-all"
      />
    </div>
  );
}
