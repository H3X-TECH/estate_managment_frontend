import { useNavigate, useRoutes } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import routesList from "./RoutesList";

const Router = () => {
  const router = useRoutes(routesList);
  const navigate = useNavigate();
  return <HeroUIProvider navigate={navigate}>{router}</HeroUIProvider>;
};

export default Router;
