import { useParams } from "react-router";
import { useGetPropertyById } from "../queries";
import {
  Avatar,
  Chip,
  Divider,
  Image,
  Skeleton,
  useDisclosure,
} from "@heroui/react";
import {
  priceUnitEnumToLabel,
  rentPricingTypeEnumToLabel,
} from "~/lib/mappers";
import {
  BathIcon,
  BedDoubleIcon,
  CalendarClockIcon,
  CircleCheckIcon,
  DotIcon,
  HouseIcon,
  PhoneCallIcon,
  SofaIcon,
  SquareDashedBottomIcon,
  Icon,
} from "lucide-react";
import { floorPlan } from "@lucide/lab";
import LeafletMap from "~/components/LeafletMap";
import { StyledButton } from "~/styled-components/StyledButton";
import { ReactNode } from "react";
import { cn } from "~/lib/utils";
import AppointmentFormModal from "../components/AppointmentFormModal";

function IconWithText({
  icon,
  text,
  className,
}: {
  icon: ReactNode;
  text: string;
  className: string;
}) {
  return (
    <div className={cn("flex items-center gap-2 col-span-4", className)}>
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default function PropertyDetailView() {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetPropertyById(id);
  console.log(data);
  const propertyDetailData = data?.data;

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();

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
            <div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold">
                  {propertyDetailData.title}
                </h1>
                <h4 className="text-lg text-content3-foreground">
                  {propertyDetailData.location}
                </h4>
                <div className="flex items-center">
                  <h4 className="text-xl">For Rent:&nbsp;</h4>
                  <h4 className="text-xl font-semibold">
                    {propertyDetailData.rentPrice}&nbsp;
                    {priceUnitEnumToLabel(propertyDetailData.priceUnit)}/
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
              </div>
              <Divider className="mt-8 mb-6" />
              <div>
                <h4 className="text-3xl font-semibold mb-4">
                  Property Details
                </h4>
                <div className="grid grid-cols-12 gap-6">
                  <IconWithText
                    className="col-span-3"
                    icon={<BedDoubleIcon />}
                    text="3 Bedrooms"
                  />
                  <IconWithText
                    className="col-span-3"
                    icon={<BathIcon />}
                    text="3 Bathrooms"
                  />
                  <IconWithText
                    className="col-span-3"
                    icon={<SquareDashedBottomIcon />}
                    text="300 sqft"
                  />
                  <IconWithText
                    className="col-span-3"
                    icon={<Icon iconNode={floorPlan} />}
                    text="Ground Floor"
                  />
                  <IconWithText
                    className="col-span-3"
                    icon={<HouseIcon />}
                    text="Condo"
                  />
                  <IconWithText
                    className="col-span-3"
                    icon={<SofaIcon />}
                    text="Fully Furnished"
                  />
                  <IconWithText
                    className="col-span-3"
                    icon={<CalendarClockIcon />}
                    text="11 hrs ago"
                  />
                </div>
              </div>
              <Divider className="mt-8 mb-6" />
              <div className="space-y-4">
                <h4 className="text-3xl font-semibold">Amenities</h4>
                <div className="grid grid-cols-12 gap-2">
                  {propertyDetailData.amenities.map((amenity) => (
                    <div
                      key={amenity.amenityId}
                      className="col-span-12 flex items-center"
                    >
                      <DotIcon />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Divider className="my-6" />
              <div className="space-y-4">
                <h4 className="text-3xl font-semibold">About this listing</h4>
                <p>{propertyDetailData.description}</p>
              </div>
              <Divider className="my-6" />
              <div className="space-y-4">
                <h4 className="text-3xl font-semibold">Location Map</h4>
                <div className="w-full h-[400px]">
                  <LeafletMap
                    viewOnly
                    center={[
                      propertyDetailData.latitude,
                      propertyDetailData.longitude,
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="max-h-min min-w-[400px] sticky top-4 px-8 py-4 rounded-md border">
            <div className="flex items-center gap-2">
              <Avatar
                size="lg"
                name={propertyDetailData.user.firstName}
                color="primary"
              />
              <div>
                <h6 className="text-lg">
                  {propertyDetailData.user.firstName}&nbsp;
                  {propertyDetailData.user.lastName}
                </h6>
                <span className="text-content2-foreground">
                  {propertyDetailData.user.phoneNumber || "+9593433xxx"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <StyledButton
                startContent={<PhoneCallIcon size={16} />}
                className="flex-1"
              >
                Call
              </StyledButton>
              <StyledButton
                startContent={<PhoneCallIcon size={16} />}
                className="flex-1"
                color="success"
              >
                WhatsApp
              </StyledButton>
            </div>
            <StyledButton
              className="w-full mt-4"
              size="lg"
              variant="bordered"
              onPress={onModalOpen}
            >
              Request a tour
            </StyledButton>
          </section>
        </div>
      </div>
      <AppointmentFormModal
        isOpen={isModalOpen}
        onOpenChange={onModalOpenChange}
      />
    </div>
  );
}
