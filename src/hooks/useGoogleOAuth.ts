import type { MouseEvent } from "react";

export const useGoogleOAuth = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const redirectUri = "http://localhost:5174/google/auth/callback";
  const scope = "profile email";

  const handleGoogleOAuth = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const googleCallbackUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&prompt=consent`;
    window.location.href = googleCallbackUrl;
  };

  return { handleGoogleOAuth };
};
