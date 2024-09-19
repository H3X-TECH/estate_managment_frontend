import { Divider, Input } from "@nextui-org/react";
import { StyledButton } from "~/styled-components/StyledButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        <h4 className="text-xl font-semibold mb-8">Welcome back!</h4>
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
            <StyledButton color="secondary" type="submit" className="w-full">
              Login
            </StyledButton>
            <div className="flex gap-2 items-center w-full">
              <Divider className="flex-1" />
              <span className="text-sm">Don&apos;t have an account yet?</span>
              <Divider className="flex-1" />
            </div>
            <StyledButton color="default" className="w-full">
              Create an account
            </StyledButton>
          </section>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
