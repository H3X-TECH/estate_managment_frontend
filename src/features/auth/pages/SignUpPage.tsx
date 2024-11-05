import { Divider, Input, Link } from "@nextui-org/react";
import { StyledButton } from "~/styled-components/StyledButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useAuthStore } from "~/stores/auth";
import { signUpUser } from "../services";

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

  const { setIsLoggedIn, setAccessToken, setRefreshToken } = useAuthStore();
  const navigate = useNavigate();

  const signUp = useMutation({
    mutationFn: async (payload: SignUpSchemaType) => {
      return await signUpUser(payload);
    },
    onSuccess: (resp) => {
      console.log("success", resp);
      setAccessToken(resp.data.accessToken);
      setRefreshToken(resp.data.refreshToken);
      setIsLoggedIn(true);
      navigate("/");
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
    signUp.mutate(values);
  };

  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        <h4 className="text-2xl font-semibold">Let&apos;s get started!</h4>
        <h6 className="text-base text-content3-foreground mb-6">
          Create an account below to start your journey.
        </h6>
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
              type="submit"
              className="w-full"
              isLoading={signUp.isPending}
            >
              Sign Up
            </StyledButton>
            <div className="flex gap-2 items-center w-full">
              <Divider className="flex-1" />
              <span className="text-sm">Or continue with</span>
              <Divider className="flex-1" />
            </div>
            <StyledButton color="default" className="w-full">
              Google
            </StyledButton>
          </section>
        </form>
        <StyledButton
          as={Link}
          href="/auth/login"
          variant="light"
          className="absolute text-black top-6 right-6"
        >
          Login
        </StyledButton>
      </div>
    </div>
  );
};

export default SignUpPage;
