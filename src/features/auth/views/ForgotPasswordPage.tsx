import { Input, Link } from "@heroui/react";
import { StyledButton } from "~/styled-components/StyledButton";
import { ArrowLeftIcon } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        <h4 className="text-2xl font-semibold">Forgot password?</h4>
        <p className="text-base mb-6">
          Please enter your email and we will sent you a link to reset your
          password.
        </p>
        <section className="space-y-6">
          <Input label="Email" variant="bordered" />
          <StyledButton className="w-full">Send Link</StyledButton>
        </section>
      </div>
      <StyledButton
        as={Link}
        startContent={<ArrowLeftIcon strokeWidth={1} />}
        href="/auth/login"
        variant="light"
        className="absolute text-black top-6 right-6"
      >
        Back to Login
      </StyledButton>
    </div>
  );
}
