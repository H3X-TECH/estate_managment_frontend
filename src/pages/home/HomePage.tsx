import CarouselCard from "~/components/CarouselCard";

import estate_one from "~/assets/estate_1.jpg";
import estate_two from "~/assets/estate_2.jpg";
import estate_three from "~/assets/estate_3.jpg";

const sample_images = [
  {
    src: estate_one,
    alt: "Estate 1",
  },
  {
    src: estate_two,
    alt: "Estate 2",
  },
  {
    src: estate_three,
    alt: "Estate 3",
  },
];
const HomePage = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4">
        <div className="basis-1/3">
          <CarouselCard images={sample_images} title="Estate One" />
        </div>
        <div className="basis-1/3">
          <CarouselCard images={sample_images} title="Estate Two" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
