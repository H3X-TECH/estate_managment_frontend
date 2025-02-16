import MainLayout from "~/layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "~/features/home/HomePage";
import AuthLayout from "~/layout/AuthLayout";
import LoginPage from "~/features/auth/views/LoginPage";
import SignUpPage from "~/features/auth/views/SignUpPage";
import TestPage from "~/pages/test-page";
import ForgotPasswordPage from "~/features/auth/views/ForgotPasswordPage";
import ResetPasswordPage from "~/features/auth/views/ResetPasswordPage";
import MainProfilePage from "~/features/profile/views/MainProfilePage";
import AddListing from "~/features/sell/views/AddListing";

const routesList = [
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
      {
        path: "/search",
        element: <div>Search Page</div>,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <MainProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-listing",
        element: <AddListing />,
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
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPasswordPage />,
      },
    ],
  },
];

export default routesList;
