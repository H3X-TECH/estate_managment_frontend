import type { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "~/stores/auth";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuthStore();
  console.log("isLoggedIN ", isLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to="/auth/login" replace />}</>;
};

export default ProtectedRoute;
