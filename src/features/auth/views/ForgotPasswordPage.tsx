import { Input, Link } from "@heroui/react";
import { StyledButton } from "~/styled-components/StyledButton";
import { ArrowLeftIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../services";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const forgotPasswordMutation = useMutation({
    mutationFn: (payload: unknown) => {
      return forgotPassword(payload);
    },
    onSuccess: () => {
      console.log("success");
      setIsSuccess(true);
    },
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const onSubmit = () => {
    if (!email) return;
    forgotPasswordMutation.mutate({ email });
  };

  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        {!isSuccess ? (
          <>
            <div className="mb-6 space-y-1">
              <h4 className="text-2xl font-semibold">Forgot password?</h4>
              <p className="text-sm">
                Enter the email address associated with your account and we'll
                send you a link to reset your password.
              </p>
            </div>
            <section className="space-y-6">
              <Input
                label="Email"
                variant="bordered"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <StyledButton
                isLoading={forgotPasswordMutation.isPending}
                className="w-full"
                type="submit"
                onPress={onSubmit}
              >
                Send Link
              </StyledButton>
            </section>
          </>
        ) : (
          <div className="space-y-2 mb-6">
            <h4 className="text-2xl font-semibold">Check your email</h4>
            <p className="text-sm">
              Thanks! If the account associated with your email exists, then
              we&apos;s sent you an email with furthur instructions for
              resetting your password.
            </p>
            <p className="text-sm">
              If you&apos;ve not received an email in a few minutes, check your
              spam, resend or try a different email.
            </p>
          </div>
        )}
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
