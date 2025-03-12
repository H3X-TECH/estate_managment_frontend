import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { DatePicker, Input, Textarea } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { StyledButton } from "~/styled-components/StyledButton";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  date: z.coerce.date({ message: "Date is required" }),
  message: z.string().optional().default(""),
});

type TFormSchema = z.infer<typeof formSchema>;

type AppointmentFormModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};
export default function AppointmentFormModal({
  isOpen,
  onOpenChange,
}: AppointmentFormModalProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (formData: TFormSchema) => {
    console.log("form values ", formData);
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
      <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
        {(onClose) => (
          <>
            <ModalHeader>Request Appointment</ModalHeader>
            <ModalBody className="space-y-4">
              <div className="flex items-center gap-2">
                <Input
                  variant="faded"
                  placeholder="Name"
                  className="flex-1"
                  {...register("name")}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                />
                <Input
                  variant="faded"
                  placeholder="Email"
                  className="flex-1"
                  {...register("email")}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                />
              </div>
              <div className="flex items-center gap-2">
                <Input
                  variant="faded"
                  placeholder="Phone No."
                  {...register("phone")}
                  isInvalid={!!errors.phone}
                  errorMessage={errors.phone?.message}
                />
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <DatePicker
                      variant="faded"
                      // @ts-ignore
                      value={field.value ? field.value : null}
                      onChange={(newDate) => field.onChange(newDate)}
                      isInvalid={!!errors.date}
                      errorMessage={errors.date?.message}
                    />
                  )}
                />
              </div>
              <Textarea variant="faded" placeholder="Message" minRows={3} />
            </ModalBody>
            <ModalFooter>
              <StyledButton variant="bordered" onPress={onClose}>
                Cancel
              </StyledButton>
              <StyledButton type="submit">Submit</StyledButton>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
