import type { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./EmblaCarousel";
import { Image } from "@nextui-org/react";

type CarouselCardProps = {
  images: Array<{ alt: string; src: string }>;
  title?: string;
  desc?: string;
};
const CarouselCard: FC<CarouselCardProps> = (props) => {
  const { images } = props;
  return (
    <div className="w-full group">
      <section className="rounded-md overflow-hidden w-full">
        <Carousel>
          <CarouselContent>
            {images.map((img) => {
              return (
                <CarouselItem key={img.alt} className="rounded-md">
                  <Image
                    classNames={{
                      wrapper: "w-full h-[260px]",
                      img: "w-full h-[260px] object-cover rounded-md object-center",
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
      <div className="pt-2">
        <h4 className="text-md">{props.title}</h4>
      </div>
    </div>
  );
};

export default CarouselCard;
