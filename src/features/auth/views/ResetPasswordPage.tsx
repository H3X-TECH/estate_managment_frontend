import { Input } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router";
import { StyledButton } from "~/styled-components/StyledButton";
import { resetPassword } from "../services";
import { useState } from "react";

export default function ResetPasswordPage() {
  const { token = "" } = useParams();
  const [password, setPassword] = useState<string>("");

  const resetPasswordMutation = useMutation({
    mutationFn: (payload: unknown) => {
      return resetPassword(token, payload);
    },
    onSuccess: () => {
      console.log("success");
    },
  });

  const onSubmit = () => {
    resetPasswordMutation.mutate({ newPassword: password });
  };

  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        <h4 className="text-2xl font-semibold mb-6">Reset Password</h4>
        {/* <p className="text-sm mb-6">
          Please enter your email and we will sent you a link to reset your
          password.
        </p> */}
        <section className="space-y-6">
          <Input
            label="New Password"
            variant="bordered"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input label="Confirm Password" variant="bordered" type="password" />
          <StyledButton
            isLoading={resetPasswordMutation.isPending}
            className="w-full"
            type="submit"
            onClick={onSubmit}
          >
            Continue
          </StyledButton>
        </section>
      </div>
    </div>
  );
}
