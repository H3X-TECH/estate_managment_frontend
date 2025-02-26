import { useParams } from "react-router";
import { useGetPropertyById } from "../queries";
import { Chip, Image, Skeleton } from "@heroui/react";
import {
  priceUnitEnumToLabel,
  rentPricingTypeEnumToLabel,
} from "~/lib/mappers";
import { CheckSquare2Icon, CircleCheckIcon } from "lucide-react";

export default function PropertyDetailView() {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetPropertyById(id);
  console.log(data);
  const propertyDetailData = data?.data;

  if (isLoading || !propertyDetailData) {
    return (
      <div>
        <Skeleton className="w-full h-[500px]" />;
      </div>
    );
  }

  return (
    <div className="w-full max-w-full py-2">
      <div className="wrapper">
        <Image
          src={propertyDetailData.attachments[0].filePath}
          alt={propertyDetailData.attachments[0].fileName}
          classNames={{
            wrapper: "img-wrapper h-[400px] rounded-none",
            img: "w-full h-full object-center object-cover rounded-none",
          }}
        />
        <div className="flex gap-6 py-6">
          <section className="flex-grow">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold">
                {propertyDetailData.title}
              </h1>
              <h4 className="text-lg">{propertyDetailData.location}</h4>
              <div className="flex items-center">
                <h4 className="text-xl">For Rent:&nbsp;</h4>
                <h4 className="text-xl font-semibold">
                  {propertyDetailData.rentPrice}&nbsp;
                  {priceUnitEnumToLabel(propertyDetailData.priceUnit)}&nbsp;
                  {rentPricingTypeEnumToLabel(propertyDetailData.rentPricing)}
                </h4>
              </div>
              <Chip
                size="lg"
                className="rounded-sm flex items-center"
                color="success"
                startContent={<CircleCheckIcon />}
                variant="flat"
              >
                Confirmed Available 2 days ago
              </Chip>
              <h4 className="text-3xl font-semibold">About this listing</h4>
              <p>{propertyDetailData.description}</p>
            </div>
          </section>
          <section className="min-w-[400px] p-2 h-[240px] bg-stone-100 rounded-md border">
            Contact Info Here!
          </section>
        </div>
      </div>
    </div>
  );
}
