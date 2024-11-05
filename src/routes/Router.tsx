import { useNavigate, useRoutes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import routesList from "./RoutesList";

const Router = () => {
  const router = useRoutes(routesList);
  const navigate = useNavigate();
  return <NextUIProvider navigate={navigate}>{router}</NextUIProvider>;
};

export default Router;
