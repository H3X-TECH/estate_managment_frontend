import { Spinner } from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { fetcher } from "~/lib/api/fetcher";
import { useAuthStore } from "~/stores/auth";

export default function GoogleRedirectView() {
  const [searchParams] = useSearchParams();
  const { setTokens } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const verifyGoogleCodeMutation = useMutation({
    mutationFn: (code: string) => {
      return fetcher("post", "/auth/google-auth", {
        code: code,
      });
    },
  });

  console.log("dddddggg");

  // useEffect(() => {
  //   const accessToken = searchParams.get("accessToken");
  //   const refreshToken = searchParams.get("refreshToken");
  //   if (accessToken && refreshToken) {
  //     setTokens(accessToken, refreshToken);
  //     queryClient.refetchQueries({ queryKey: ["user-profile"] });
  //     navigate("/");
  //   }

  //   toast.error("Invalid tokens, please try again.");
  //   navigate("/auth/login");
  // }, [navigate, searchParams, setTokens]);

  useEffect(() => {
    const code = searchParams.get("code");
    console.log("code", code);
    if (code) {
      verifyGoogleCodeMutation.mutate(code, {
        onSuccess: (resp) => {
          console.log("success", resp);
          const accessToken = resp.data.accessToken;
          const refreshToken = resp.data.refreshToken;
          setTokens(accessToken, refreshToken);
          queryClient.refetchQueries({ queryKey: ["user-profile"] });
          navigate("/");
        },
        onError: (err) => {
          toast.error(err.message);
          navigate("/auth/login");
        },
      });
    }
  }, [
    searchParams,
    navigate,
    queryClient.refetchQueries,
    setTokens,
    verifyGoogleCodeMutation.mutate,
  ]);

  return (
    <div className="w-[100dvw] h-[100dvh] flex items-center flex-col justify-center">
      <Spinner size="lg" />
      <span className="text-lg text-center">Redirecting...</span>
    </div>
  );
}
