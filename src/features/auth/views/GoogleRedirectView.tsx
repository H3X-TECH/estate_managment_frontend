import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "~/stores/auth";

export default function GoogleRedirectView() {
  const [searchParams] = useSearchParams();
  const { setTokens } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    if (accessToken && refreshToken) {
      setTokens(accessToken, refreshToken);
      queryClient.refetchQueries({ queryKey: ["user-profile"] });
      navigate("/");
    }

    toast.error("Invalid tokens, please try again.");
    navigate("/auth/login");
  }, [navigate, searchParams, setTokens]);

  return (
    <div className="w-[100dvw] h-[100dvh] flex items-center flex-col justify-center">
      <Spinner size="lg" />
      <span className="text-lg text-center">Redirecting...</span>
    </div>
  );
}
