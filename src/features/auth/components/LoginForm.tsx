import { Divider, Input, Link } from "@heroui/react";
import { StyledButton } from "~/styled-components/StyledButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useAuthStore } from "~/stores/auth";
import { loginUser } from "../services";

const schema = z.object({
  email: z.string().email("Please enter valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setIsLoggedIn, setAccessToken, setRefreshToken, setUserData } =
    useAuthStore();
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: async (payload: z.infer<typeof schema>) => {
      return await loginUser(payload);
    },
    onSuccess: (resp) => {
      console.log("success", resp);
      setAccessToken(resp.data.accessToken);
      setRefreshToken(resp.data.refreshToken);
      setUserData(resp.data.user);
      setIsLoggedIn(true);
      navigate("/");
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
    login.mutate(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="space-y-6">
          <Input
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            variant="bordered"
            label="Email"
          />
          <div>
            <Input
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              variant="bordered"
              type="password"
              label="Password"
            />
            <Link href="/auth/forgot-password" className="text-xs">
              Forgot your password?
            </Link>
          </div>
          <StyledButton
            type="submit"
            className="w-full"
            isLoading={login.isPending}
          >
            Login
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
        href="/auth/sign-up"
        variant="light"
        className="absolute text-black top-6 right-6"
      >
        Sign up
      </StyledButton>
    </>
  );
};

export default LoginForm;
