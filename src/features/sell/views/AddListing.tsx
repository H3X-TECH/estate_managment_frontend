import {
  DatePicker,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@heroui/react";
import { z } from "zod";
import FileUploader from "~/components/FileUploader";
import { StyledButton } from "~/styled-components/StyledButton";

const PROPERTY_TYPES = [
  { value: "HOUSE", label: "House" },
  { value: "APARTMENT", label: "Apartment" },
  { value: "CONDO", label: "Land" },
  { value: "OFFICE", label: "Commercial" },
  {
    value: "OTHER",
    label: "Other",
  },
];

const AMENITIES = [
  {
    value: "air_conditioning",
    label: "Air Conditioning",
  },
  {
    value: "balcony",
    label: "Balcony",
  },
  {
    value: "dishwasher",
    label: "Dishwasher",
  },
  {
    value: "elevator",
    label: "Elevator",
  },
];

const formSchema = z
  .object({
    listingType: z.string(),
    title: z.string().min(4, "Title is required"),
    description: z.string().min(10, "Description is required"),
    images: z
      .array(
        z.object({
          fileName: z.string(),
          filePath: z.string().url(),
        })
      )
      .min(1),
  })
  .required();

type TFormSchema = z.infer<typeof formSchema>;

export default function AddListing() {
  return (
    <div className="max-w-screen-lg mx-auto my-6 p-10 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Listing Details</h2>
      <form className="space-y-6">
        <RadioGroup label="Listing Type" orientation="horizontal">
          <Radio value="rent">Rent</Radio>
          <Radio value="sale">Sale</Radio>
          <Radio value="rent/sale">Rent/Sale</Radio>
        </RadioGroup>
        <div className="grid grid-cols-12 gap-4">
          <Input
            label="Title"
            labelPlacement="outside"
            placeholder="Enter your title"
            className="col-span-12"
            variant="bordered"
          />
          <Textarea
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            className="col-span-12"
            variant="bordered"
            rows={6}
          />
          <Input
            label="Rent Price"
            labelPlacement="outside"
            placeholder="MMK"
            className="col-span-6"
            variant="bordered"
          />
          <Input
            label="Sell Price"
            labelPlacement="outside"
            placeholder="MMK"
            className="col-span-6"
            variant="bordered"
          />
          <Select
            label="Property Type"
            labelPlacement="outside"
            placeholder="Select property type"
            variant="bordered"
            className="col-span-6"
          >
            {PROPERTY_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            label="Address"
            labelPlacement="outside"
            placeholder="Type address"
            className="col-span-6"
            variant="bordered"
          />
          <div className="col-span-6 flex items-end gap-2">
            <div className="flex-grow">
              <DatePicker
                variant="bordered"
                label="Available Date"
                labelPlacement="outside"
                className="w-full"
              />
            </div>
            <Switch defaultChecked className="flex-grow">
              <span className="text-sm">Available Now</span>
            </Switch>
          </div>
          <Input
            label="Total Area"
            labelPlacement="outside"
            placeholder="Enter total area"
            className="col-span-6"
            variant="bordered"
          />
          <Input
            label="Number of Bedrooms"
            labelPlacement="outside"
            placeholder="Enter total bedrooms number"
            className="col-span-6"
            variant="bordered"
          />
          <Input
            label="Number of Bathrooms"
            labelPlacement="outside"
            placeholder="Enter total bathrooms number"
            className="col-span-6"
            variant="bordered"
          />
          <Select
            label="Amenities"
            placeholder="Select amenities"
            selectionMode="multiple"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-12"
          >
            {AMENITIES.map((amenity) => (
              <SelectItem key={amenity.value} value={amenity.value}>
                {amenity.label}
              </SelectItem>
            ))}
          </Select>
          <div className="col-span-12 flex flex-col gap-2">
            <label className="text-sm">Property Images</label>
            <FileUploader />
          </div>
        </div>

        <div className="w-full flex items-center justify-end">
          <StyledButton size="lg">Save</StyledButton>
        </div>
      </form>
    </div>
  );
}
