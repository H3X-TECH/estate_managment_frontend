import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { StyledButton } from "~/styled-components/StyledButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export default function TestPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    age: 0,
  });
  const [formType, setFormType] = useState<"create" | "edit">("create");

  const openWithValues = () => {
    setFormValues({
      name: "Htet Zarni",
      email: "zarni@gmail.com",
      age: 20,
    });
    setFormType("edit");
    onOpen();
  };

  const openCreateForm = () => {
    setFormType("create");
    onOpen();
  };

  return (
    <div className="p-8">
      <StyledButton onClick={openCreateForm}>Open Modal</StyledButton>
      <StyledButton onClick={openWithValues}>
        Open Modal With Values
      </StyledButton>

      <ModelForm
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        formValues={formValues}
        formType={formType}
      />
    </div>
  );
}

type ModelFormProps = {
  isOpen: boolean;
  onOpenChange: (val: boolean) => void;
  formValues?: TFormSchema;
  formType: "create" | "edit";
};

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email(),
  age: z.number().min(18, "Age must be greater than 18."),
});

type TFormSchema = z.infer<typeof formSchema>;

function ModelForm({
  isOpen,
  formType,
  formValues,
  onOpenChange,
}: ModelFormProps) {
  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    values: {
      name: formType === "edit" && formValues ? formValues.name : "",
      email: formType === "edit" && formValues ? formValues.email : "",
      age: formType === "edit" && formValues ? formValues.age : 0,
    },
  });

  const onSubmit = (formData: TFormSchema) => {
    console.log(formData);
    onOpenChange(false);
  };

  const handleClose = () => {
    clearErrors();
    reset();
    onOpenChange(false);
  };

  return (
    <Modal
      as="form"
      isOpen={isOpen}
      // onOpenChange={onOpenChange}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ModalContent>
        <ModalHeader>Create Form</ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  {...field}
                  label="Name"
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  {...field}
                  label="Email"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="age"
              render={({ field }) => (
                <Input
                  {...field}
                  value={
                    Number.isNaN(field.value) || field.value === 0
                      ? ""
                      : field.value.toString()
                  }
                  onChange={(e) =>
                    field.onChange(
                      Number.parseInt(e.target.value.replace(/\D/g, ""), 10)
                    )
                  }
                  label="Age"
                  isInvalid={!!errors.age}
                  errorMessage={errors.age?.message}
                />
              )}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <StyledButton variant="bordered" onClick={() => onOpenChange(false)}>
            Close
          </StyledButton>
          <StyledButton color="primary" type="submit">
            Submit
          </StyledButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
