import { Chip, Image } from "@heroui/react";
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
  Heart,
  House,
  MapPin,
  SquareDashedBottom,
} from "lucide-react";
import { StyledButton } from "~/styled-components/StyledButton";

type PropertyCardProps = {
  title: string;
  images: Array<any>;
};
export default function PropertyCard({ title, images }: PropertyCardProps) {
  return (
    <div className="w-full cursor-pointer rounded-lg hover:shadow-lg transition-all overflow-hidden relative bg-stone-50 border group">
      <section className="overflow-hidden w-full">
        <Carousel>
          <CarouselContent>
            {images.map((img) => {
              return (
                <CarouselItem key={img.alt}>
                  <Image
                    classNames={{
                      wrapper: "w-full h-[220px] rounded-none",
                      img: "w-full h-[220px] object-cover rounded-none object-center",
                    }}
                    src={img.src}
                    alt={img.alt}
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
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">{title}</h4>
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <h6 className="text-base">Golden Valley, Yangon</h6>
            </div>
            <h6 className="text-base font-semibold">MMK 500,000,000</h6>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <House size={18} />
                <span className="text-sm font-medium">Condo</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed size={18} />
                <span className="text-sm font-medium">2</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath size={18} />
                <span className="text-sm font-medium">1</span>
              </div>
              <div className="flex items-center gap-1">
                <SquareDashedBottom size={18} />
                <span className="text-sm font-medium">1200 sqft</span>
              </div>
            </div>
          </div>
          <div>
            <StyledButton isIconOnly size="sm" variant="light" color="danger">
              <Heart size={24} />
            </StyledButton>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <Chip color="warning" size="sm">
          Featured
        </Chip>
        <Chip color="success" size="sm">
          Available Now
        </Chip>
      </div>
    </div>
  );
}
