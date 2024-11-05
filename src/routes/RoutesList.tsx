import MainLayout from "~/layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "~/features/home/HomePage";
import AuthLayout from "~/layout/AuthLayout";
import LoginPage from "~/features/auth/pages/LoginPage";
import SignUpPage from "~/features/auth/pages/SignUpPage";

const routesList = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),

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

export default routesList;
