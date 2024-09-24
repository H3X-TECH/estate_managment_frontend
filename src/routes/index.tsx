import { useNavigate, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "~/pages/home/HomePage";
import LoginPage from "~/pages/auth/Login";
import AuthLayout from "~/layout/AuthLayout";
import SignUpPage from "~/pages/auth/SignUpPage";
import { NextUIProvider } from "@nextui-org/react";
import ProtectedRoute from "./ProtectedRoute";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    caseSensitive: true,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <div>Search Page</div>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
];

const AppRoutes = () => {
  const router = useRoutes(routes);
  const navigate = useNavigate();
  return <NextUIProvider navigate={navigate}>{router}</NextUIProvider>;
};

export default AppRoutes;
