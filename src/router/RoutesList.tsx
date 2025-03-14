import MainLayout from "~/layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "~/features/landing-page/HomePage";
import AuthLayout from "~/layouts/AuthLayout";
import LoginPage from "~/features/auth/views/LoginPage";
import SignUpPage from "~/features/auth/views/SignUpPage";
import ForgotPasswordPage from "~/features/auth/views/ForgotPasswordPage";
import ResetPasswordPage from "~/features/auth/views/ResetPasswordPage";
import MainProfilePage from "~/features/profile/views/MainProfilePage";
import AddListing from "~/features/property/views/AddListing";
import GoogleRedirectView from "~/features/auth/views/GoogleRedirectView";
import PropertyDetailPage from "~/pages/PropertyDetailPage";

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
      {
        path: "/property/:id",
        element: <PropertyDetailPage />,
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
  {
    path: "google/auth/callback",
    element: <GoogleRedirectView />,
  },
];

export default routesList;
