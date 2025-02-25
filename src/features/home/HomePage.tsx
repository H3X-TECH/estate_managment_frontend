import estate_one from "~/assets/estate_1.jpg";
import estate_two from "~/assets/estate_2.jpg";
import estate_three from "~/assets/estate_3.jpg";
import HeroSection from "./components/HeroSection";
import FilterSection from "./components/FilterSection";
import PropertyCard from "~/components/PropertyCard";
import { Button, Input } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "~/lib/fetcher";
import { ApiResponse, PagingResponse } from "~/models/shared";
import { PropertyResponse } from "~/models/property";

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

const useGetProperties = () => {
  return useQuery<ApiResponse<PagingResponse<PropertyResponse>>>({
    queryKey: ["properties"],
    queryFn: () => {
      return fetcher("get", "/property/paging?page=1&limit=3");
    },
  });
};

const HomePage = () => {
  const propertiesQuery = useGetProperties();
  const propertiesList = propertiesQuery.data?.data.list || [];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FilterSection />
      <div className="max-w-screen-xl px-4 mx-auto py-10">
        <section className="py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold">Featured Posts</h2>
          </div>
          <div className="flex items-center gap-4">
            {propertiesList.map((property) => (
              <div key={property.propertyId} className="basis-1/3">
                <PropertyCard
                  title={property.title}
                  price={property.rentPrice}
                  priceUnit={property.priceUnit}
                  pricingType={property.rentPricing}
                  location={property.location}
                  bedRooms={property.bedRooms}
                  bathRooms={property.bathRooms}
                  totalArea={property.totalArea}
                  images={property.attachments}
                  type={property.type}
                  listedBy={property.user.firstName}
                  postedAt={property.createdAt}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold">Latest Posts</h2>
          </div>
          <div className="flex items-center gap-4">
            {propertiesList.map((property) => (
              <div key={property.propertyId} className="basis-1/3">
                <PropertyCard
                  title={property.title}
                  price={property.rentPrice}
                  priceUnit={property.priceUnit}
                  pricingType={property.rentPricing}
                  location={property.location}
                  bedRooms={property.bedRooms}
                  bathRooms={property.bathRooms}
                  totalArea={property.totalArea}
                  images={property.attachments}
                  type={property.type}
                  listedBy={property.user.firstName}
                  postedAt={property.createdAt}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Explore our site
          </h2>
          <div className="w-full flex items-center flex-wrap">
            <div className="p-4 basis-1/4 space-y-2">
              <h4 className="text-lg font-semibold text-center">
                Buy property
              </h4>
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur elit. Exercitationem
                asperiores cum modi, laborum impedit dolore distinctio ipsa
                nostrum unde labore hic expedita repellat, magnam et, temporibus
                saepe.
              </p>
            </div>
            <div className="p-4 basis-1/4 space-y-2">
              <h4 className="text-lg font-semibold text-center">
                Rent property
              </h4>
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem asperiores cum modi, laborum impedit dolore
                distinctio ipsa nostrum unde labore hic expedita repellat,
                magnam quaerat et, temporibus saepe.
              </p>
            </div>
            <div className="p-4 basis-1/4 space-y-2">
              <h4 className="text-lg font-semibold text-center">
                List your property
              </h4>
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem asperiores cum modi, laborum impedid llat, magnam
                fuga quibusdam quaerat et, temporibus saepe.
              </p>
            </div>
            <div className="p-4 basis-1/4 space-y-2">
              <h4 className="text-lg font-semibold text-center">
                Explore Myanmar
              </h4>
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem laborum impedit dolore distinctio ipsa nostrum
                unde labore hic expedita repellat, magnam fuga quibusdam quaerat
                et, temporibus saepe.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="py-16 bg-primary-800">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Subscribe to our newsletter
            </h2>
            <p className="text-lg text-white">
              Get the latest news and updates from our site
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white rounded-md">
            <Input
              variant="underlined"
              placeholder="Enter your email"
              className="w-[180px]"
            />
            <Button color="primary">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
