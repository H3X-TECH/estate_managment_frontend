import { Input } from "@heroui/react";
import { Select, SelectItem } from "@heroui/select";
import { StyledButton } from "~/styled-components/StyledButton";

const propertyTypes = [
  { key: 1, label: "Aprtment" },
  { key: 2, label: "House" },
  { key: 3, label: "Condo" },
];

export default function FilterSection() {
  return (
    <div className="w-9/12 mx-auto p-4 max-w-screen-lg bg-stone-50 rounded-lg border -mt-[74px]">
      <div className="grid grid-cols-12 gap-2">
        <Select
          label="Property Type"
          variant="bordered"
          size="sm"
          className="col-span-6"
        >
          {propertyTypes.map((type) => (
            <SelectItem key={type.key} value={type.key}>
              {type.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          label="Something"
          variant="bordered"
          size="sm"
          className="col-span-6"
        />
        <Input
          label="Bedrooms"
          variant="bordered"
          size="sm"
          className="col-span-5"
        />
        <Input
          label="Bathrooms"
          variant="bordered"
          size="sm"
          className="col-span-5"
        />
        <StyledButton className="col-span-2 h-full">Search</StyledButton>
      </div>
      {/* <div className="flex items-center gap-4 justify-end pt-4">
        <StyledButton variant="bordered" color="default">
          Reset
        </StyledButton>
      </div> */}
    </div>
  );
}
