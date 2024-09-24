import { Divider, Input, Link } from "@nextui-org/react";
import { StyledButton } from "~/styled-components/StyledButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { fetcher } from "~/lib/fetcher";
import { useNavigate } from "react-router";

const schema = z.object({
  email: z.string().email("Please enter valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginPage = () => {
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

  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: async (payload: z.infer<typeof schema>) => {
      return await fetcher("post", "/auth/login", payload);
    },
    onSuccess: (resp) => {
      console.log("success", resp);
      localStorage.setItem("access_token", resp.accessToken);
      localStorage.setItem("refresh_token", resp.refreshToken);
      navigate("/");
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
    login.mutate(values);
  };

  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        <h4 className="text-2xl font-semibold mb-6">Welcome back!</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="space-y-6">
            <Input
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              variant="bordered"
              label="Email"
            />
            <Input
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              variant="bordered"
              type="password"
              label="Password"
            />
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
      </div>
    </div>
  );
};

export default LoginPage;
