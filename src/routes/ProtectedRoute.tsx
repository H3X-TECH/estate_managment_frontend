import { type FC, type PropsWithChildren, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? children : <Navigate to="/auth/login" replace />}</>;
};

export default ProtectedRoute;

export const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [refreshToken, setRefreshToken] = useState<string | undefined>();
  const { pathname } = useLocation();
  const accessTokenFromStorage = localStorage.getItem("access_token");
  const refreshTokenFromStorage = localStorage.getItem("refresh_token");

  //   useEffect(() => {
  //     console.log(accessTokenFromStorage, refreshTokenFromStorage);
  //     if (accessTokenFromStorage && refreshTokenFromStorage) {
  //       setAccessToken(accessTokenFromStorage);
  //       setRefreshToken(refreshTokenFromStorage);
  //     }
  //   }, [pathname, accessToken, refreshToken]);

  return {
    isLoggedIn: !!accessTokenFromStorage || !!refreshTokenFromStorage,
    accessToken,
    refreshToken,
  };
};
