import {
  Button,
  DatePicker,
  Divider,
  Image,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import FileUploader from "~/components/FileUploader";
import { useGetAllAmenities } from "~/queries/setup-queries";
import { StyledButton } from "~/styled-components/StyledButton";
import { parseDate } from "@internationalized/date";
import { useCreateNewProperty } from "../queries";
import { useAuthStore } from "~/stores/auth";
import { toast } from "sonner";
import { removeFile, uploadFile } from "~/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import LeafletMap from "~/components/LeafletMap";
import {
  PRICE_UNITS,
  PRICE_UNITS_ENUM,
  PROPERTY_TYPES,
  PROPERTY_TYPES_ENUM,
  RENT_PRICING_TYPES,
  RENT_PRICNG_TYPES_ENUM,
} from "~/lib/config/constants";
import { CreatePropertyPayload } from "~/models/property";

const formSchema = z
  .object({
    listingType: z.string({ message: "Listing type is required" }),
    title: z.string().min(8, "Title must be at least 8 characters"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),
    rentPrice: z.string().min(4, "Rent price is required"),
    sellPrice: z.string().min(4, "Sell price is required"),
    // propertyType: z.string({ message: "Property type is required" }),
    propertyType: z.enum(PROPERTY_TYPES_ENUM, {
      message: "Property type is required",
    }),
    priceUnit: z.enum(PRICE_UNITS_ENUM, { message: "Price unit is required" }),
    pricingType: z.enum(RENT_PRICNG_TYPES_ENUM, {
      message: "Pricing type is required",
    }),
    address: z.string().min(4, "Address is required"),
    availableDate: z
      .string()
      .min(4, "Available date is required")
      .date("Invalid date"),
    totalArea: z.string().min(1, "Total area is required"),
    bedrooms: z.string().min(1, "Bedrooms is required"),
    bathrooms: z.string().min(1, "Bathrooms is required"),
    latitude: z.string().min(1, "Latitude is required"),
    longitude: z.string().min(1, "Longitude is required"),
    amenities: z.array(z.coerce.number()).min(1, "Amenities is required"),
    images: z
      .array(
        z.object({
          fileName: z.string(),
          filePath: z.string().url(),
        })
      )
      .min(1, "Images is required"),
  })
  .required();

type TFormSchema = z.infer<typeof formSchema>;

export default function AddListing() {
  const { userData } = useAuthStore();
  const allAmenitiesQuery = useGetAllAmenities();
  const allAmenitiesList = allAmenitiesQuery.data?.data || [];
  const createPropertyMutation = useCreateNewProperty();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      listingType: "rent",
      amenities: [],
      images: [],
      latitude: "",
      longitude: "",
    },
  });

  const imagesValue = watch("images");

  const uploadFileMutation = useMutation({
    mutationFn: (file: File) => {
      return uploadFile(file);
    },
    onSuccess: () => toast.success("File uploaded successfully"),
  });

  const removeFileMutation = useMutation({
    mutationFn: (fileName: string) => {
      return removeFile(fileName);
    },
    onSuccess: (resp) => {
      const fileName = resp.data?.[0].name;
      console.log("deleted file: ", resp.data);
      const newImages = imagesValue.filter((img) => img.fileName !== fileName);
      setValue("images", newImages);
      toast.success("File removed successfully");
    },
    onError: (err) => {
      console.log("Remove file error: ", err);
    },
  });

  const handleFileSelect = async (files: Array<File>) => {
    const file = files[0];
    try {
      const resp = await uploadFileMutation.mutateAsync(file);
      console.log(resp);
      setValue("images", [
        ...imagesValue,
        { fileName: resp.fileName, filePath: resp.filePath },
      ]);
    } catch (err) {
      console.log("Upload file error: ", err);
    }
  };

  const onSubmit = (formData: TFormSchema) => {
    console.log(formData);
    const payload: CreatePropertyPayload = {
      userId: userData?.userId || "",
      title: formData.title,
      description: formData.description,
      type: formData.propertyType,
      priceUnit: formData.priceUnit,
      rentPricing: formData.pricingType,
      location: formData.address,
      sellPrice: Number.parseInt(formData.sellPrice),
      rentPrice: Number.parseInt(formData.rentPrice),
      availableDate: new Date(formData.availableDate),
      bedRooms: Number.parseInt(formData.bedrooms),
      bathRooms: Number.parseInt(formData.bathrooms),
      totalArea: Number.parseInt(formData.totalArea),
      latitude: Number.parseFloat(formData.latitude),
      longitude: Number.parseFloat(formData.longitude),
      amenities: formData.amenities,
      attachments: formData.images,
    };
    createPropertyMutation.mutate(payload, {
      onSuccess: () => toast.success("Property created successfully"),
    });
  };

  return (
    <section className="max-w-screen-xl grid grid-cols-12 gap-4 mx-auto my-6">
      <div className="col-span-9">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Add your property to listing
          </h2>
          <p className="text-content3-foreground">
            Let us know more about your property.
          </p>
        </div>
        <div className="p-6 border-1.5 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-lg font-medium mb-4">Basic Info</h4>
            {/* 
                <RadioGroup label="Listing Type" orientation="horizontal">
                  <Radio value="rent">Rent</Radio>
                  <Radio value="sale">Sale</Radio>
                  <Radio value="rent/sale">Rent/Sale</Radio>
                </RadioGroup> 
            */}
            <div className="grid grid-cols-12 gap-6">
              <Input
                label="Title"
                labelPlacement="outside"
                placeholder="Enter your title"
                className="col-span-12"
                variant="bordered"
                {...register("title")}
              />
              <Controller
                control={control}
                name="propertyType"
                render={({ field }) => (
                  <Select
                    label="Property Type"
                    labelPlacement="outside"
                    placeholder="Select property type"
                    variant="bordered"
                    className="col-span-6"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    {PROPERTY_TYPES.map((type) => (
                      <SelectItem key={type.value}>{type.label}</SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Input
                label="Address"
                labelPlacement="outside"
                placeholder="Type address"
                className="col-span-6"
                variant="bordered"
                {...register("address")}
              />
              <Controller
                control={control}
                name="latitude"
                render={({ field }) => (
                  <Input
                    label="Latitude"
                    labelPlacement="outside"
                    placeholder="Enter latitude"
                    className="col-span-6"
                    variant="bordered"
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="longitude"
                render={({ field }) => (
                  <Input
                    label="Longitude"
                    labelPlacement="outside"
                    placeholder="Enter longitude"
                    className="col-span-6"
                    variant="bordered"
                    {...field}
                  />
                )}
              />
              <div className="col-span-12 h-80">
                <LeafletMap
                  onMarkerMove={(e: any) => {
                    setValue("latitude", Number(e.latlng.lat).toFixed(7));
                    setValue("longitude", Number(e.latlng.lng).toFixed(7));
                  }}
                />
              </div>

              {/* <Input
                label="Rent Price"
                labelPlacement="outside"
                placeholder="MMK"
                className="col-span-6"
                variant="bordered"
                {...register("rentPrice")}
              /> */}
              <Input
                label="Rent Price"
                labelPlacement="outside"
                placeholder="MMK"
                className="col-span-4"
                variant="bordered"
                {...register("sellPrice")}
              />
              <Controller
                control={control}
                name="priceUnit"
                render={({ field }) => (
                  <Select
                    label="Price Unit"
                    placeholder="Select price unit"
                    labelPlacement="outside"
                    variant="bordered"
                    className="col-span-4"
                    {...field}
                  >
                    {PRICE_UNITS.map((priceUnit) => (
                      <SelectItem key={priceUnit.value}>
                        {priceUnit.label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Controller
                control={control}
                name="pricingType"
                render={({ field }) => (
                  <Select
                    label="Pricing Type"
                    placeholder="Select pricing type"
                    labelPlacement="outside"
                    variant="bordered"
                    className="col-span-4"
                    {...field}
                  >
                    {RENT_PRICING_TYPES.map((rpt) => (
                      <SelectItem key={rpt.value}>{rpt.label}</SelectItem>
                    ))}
                  </Select>
                )}
              />
            </div>
            <Divider className="mt-8 mb-4" />
            <h4 className="col-span-12 text-lg mb-4 font-medium">
              Additional Details
            </h4>
            <div className="grid grid-cols-12 gap-6">
              <Textarea
                label="Description"
                labelPlacement="outside"
                placeholder="Enter your description"
                className="col-span-12"
                variant="bordered"
                minRows={8}
                {...register("description")}
              />
              <Input
                label="Number of Bedrooms"
                labelPlacement="outside"
                placeholder="Enter total bedrooms number"
                className="col-span-6"
                variant="bordered"
                {...register("bedrooms")}
              />
              <Input
                label="Number of Bathrooms"
                labelPlacement="outside"
                placeholder="Enter total bathrooms number"
                className="col-span-6"
                variant="bordered"
                {...register("bathrooms")}
              />
              <div className="col-span-6 flex items-end gap-2">
                <div className="flex-grow">
                  <Controller
                    control={control}
                    name="availableDate"
                    render={({ field }) => (
                      <DatePicker
                        variant="bordered"
                        label="Available Date"
                        labelPlacement="outside"
                        className="w-full"
                        // @ts-ignore
                        value={field.value ? parseDate(field.value) : null}
                        onChange={(newVal) =>
                          field.onChange(newVal ? newVal.toString() : "")
                        }
                      />
                    )}
                  />
                </div>
                {/* <Switch defaultChecked className="flex-grow">
                <span className="text-sm">Available Now</span>
              </Switch> */}
              </div>
              <Input
                label="Total Area (sqft)"
                labelPlacement="outside"
                placeholder="Enter total area"
                className="col-span-6"
                variant="bordered"
                {...register("totalArea")}
              />
              <Controller
                control={control}
                name="amenities"
                render={({ field }) => (
                  <Select
                    label="Amenities"
                    placeholder="Select amenities"
                    selectionMode="multiple"
                    labelPlacement="outside"
                    variant="bordered"
                    className="col-span-12"
                    selectedKeys={field.value}
                    onChange={(e) => {
                      console.log(e.target.value);
                      field.onChange(e.target.value.split(","));
                    }}
                  >
                    {allAmenitiesList.map((amenity) => (
                      <SelectItem key={amenity.amenityId}>
                        {amenity.name}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              <div className="col-span-12 flex flex-col gap-2">
                <label className="text-sm">Property Images</label>
                <FileUploader
                  onFileSelect={handleFileSelect}
                  isLoading={uploadFileMutation.isPending}
                />
                <div className="mt-2 flex items-center gap-2">
                  {imagesValue.map((img, indx) => (
                    <div key={indx} className="relative group">
                      <Image
                        src={img.filePath}
                        alt={img.fileName}
                        width={200}
                        height={100}
                        classNames={{
                          wrapper: "border",
                          img: "object-cover object-center",
                        }}
                      />
                      <Button
                        size="sm"
                        isIconOnly
                        variant="solid"
                        color="danger"
                        className="absolute bottom-2 right-2 z-20"
                        isLoading={removeFileMutation.isPending}
                        onPress={() => removeFileMutation.mutate(img.fileName)}
                      >
                        <Trash2Icon />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-end">
              <StyledButton
                size="lg"
                type="submit"
                isLoading={createPropertyMutation.isPending}
              >
                Save
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
      <div className="p-4 border-1.5 space-y-4 sticky top-2 shadow-sm col-span-3 rounded-md max-h-min">
        <h2 className="text-xl font-semibold">Need help?</h2>
        <Divider />
        <p className="text-content3-foreground">
          We will be more than happy to assist you in filling the form. Please
          contact our support team
        </p>
        <div>
          <h6 className="font-semibold">Opening Hours</h6>
          <p className="text-content3-foreground">Monday - Friday: 9am - 5pm</p>
        </div>
        <div>
          <p className="font-semibold">justaplaceholder@mail.to</p>
          <p className="font-semibold">+95912345568</p>
        </div>
      </div>
    </section>
  );
}
