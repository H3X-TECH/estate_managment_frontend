import { Divider, Input } from "@nextui-org/react";
import { StyledButton } from "~/styled-components/StyledButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { fetcher } from "~/lib/fetcher";
import { useNavigate } from "react-router";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignUpSchemaType = z.infer<typeof schema>;

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const signUp = useMutation({
    mutationFn: async (payload: SignUpSchemaType) => {
      return await fetcher("post", "/auth/sign-up", payload);
    },
    onSuccess: (resp) => {
      console.log("success", resp);
      localStorage.setItem("access_token", resp.access_token);
      navigate("/");
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
    signUp.mutate(values);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        <h4 className="text-xl font-semibold mb-8">Let&apos;s get started!</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                {...register("firstName")}
                isInvalid={!!errors.firstName}
                errorMessage={errors.firstName?.message}
                variant="bordered"
                label="Firstname"
                className="col-span-1"
              />
              <Input
                {...register("lastName")}
                isInvalid={!!errors.lastName}
                errorMessage={errors.lastName?.message}
                variant="bordered"
                label="Lastname"
                className="col-span-1"
              />
              <Input
                {...register("email")}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
                variant="bordered"
                label="Email"
                className="col-span-2"
              />
              <Input
                {...register("password")}
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
                variant="bordered"
                type="password"
                label="Password"
                className="col-span-2"
              />
            </div>
            <StyledButton
              color="secondary"
              type="submit"
              className="w-full"
              isLoading={signUp.isPending}
            >
              Sign Up
            </StyledButton>
            <div className="flex gap-2 items-center w-full">
              <Divider className="flex-1" />
              <span className="text-sm">Already have an account?</span>
              <Divider className="flex-1" />
            </div>
            <StyledButton color="default" className="w-full">
              Login
            </StyledButton>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
