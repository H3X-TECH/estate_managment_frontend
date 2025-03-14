import { Avatar, Input } from "@heroui/react";
import { StyledButton } from "~/styled-components/StyledButton";
import { z } from "zod";
import { useUpdateUserProfile } from "../queries";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "~/stores/auth";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  preferName: z.string().nullable(),
  location: z.string().nullable(),
  phoneNumber: z.string().nullable(),
});

type TFormSchema = z.infer<typeof formSchema>;

export default function ProfileSetting() {
  const updateProfileMutation = useUpdateUserProfile();
  const { userData, setUserData } = useAuthStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    resetOptions: {
      keepDirtyValues: true,
    },
    values: {
      firstName: userData?.firstName ?? "",
      lastName: userData?.lastName ?? "",
      preferName: userData?.preferName ?? "",
      location: userData?.location ?? "",
      phoneNumber: userData?.phoneNumber ?? "",
    },
  });

  const onFormSubmit = (formData: TFormSchema) => {
    console.log(formData);
    updateProfileMutation.mutate(
      { ...formData, code: null },
      {
        onSuccess: () => {
          if (userData) {
            setUserData({
              ...userData,
              ...formData,
            });
          }
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="w-full">
      <div className="w-full grid grid-cols-12 gap-8 bg-default-100 border rounded-md p-8">
        <div className="col-span-12 flex items-center gap-4">
          <Avatar
            size="lg"
            src={userData?.avatarUrl ?? ""}
            name={userData?.firstName.slice(0, 2).toLocaleUpperCase()}
            color="primary"
            isBordered
          />
          <div>
            <h4 className="text-xl font-semibold">
              {userData?.firstName} {userData?.lastName}
            </h4>
            <h4 className="text-xl">Landlord</h4>
          </div>
        </div>
        <div className="col-span-6">
          <div className="w-full">
            <h4 className="text-lg text-primary font-medium">Email Address</h4>
            <div className="flex items-center gap-2">
              <span className="text-lg">{userData?.email}</span>
              <StyledButton variant="flat" color="primary" size="sm">
                Edit
              </StyledButton>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="w-full h-full flex items-center">
            <StyledButton variant="flat" color="primary">
              Change Password
            </StyledButton>
          </div>
        </div>
        <div className="col-span-6">
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <Input
                label="First Name"
                placeholder="Type your first name"
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                required
                {...field}
                isInvalid={!!errors.firstName}
                errorMessage={errors.firstName?.message}
              />
            )}
          />
        </div>
        <div className="col-span-6">
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <Input
                label="Last Name"
                placeholder="Type your last name"
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                required
                {...field}
                isInvalid={!!errors.lastName}
                errorMessage={errors.lastName?.message}
              />
            )}
          />
        </div>
        <div className="col-span-6">
          <Controller
            control={control}
            name="preferName"
            render={({ field }) => (
              <Input
                label="Prefer Name"
                placeholder="Type your prefer name"
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
        </div>
        <div className="col-span-6">
          <Controller
            control={control}
            name="location"
            render={({ field }) => (
              <Input
                label="Address"
                placeholder="Type your address"
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
        </div>
        <div className="col-span-6">
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <Input
                label="Phone No."
                placeholder="Type your phone number"
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-4 mt-4">
        <StyledButton variant="bordered" color="default" size="lg">
          Cancel
        </StyledButton>
        <StyledButton
          type="submit"
          size="lg"
          isLoading={updateProfileMutation.isPending}
        >
          Save
        </StyledButton>
      </div>
    </form>
  );
}
