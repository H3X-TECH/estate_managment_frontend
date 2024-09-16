import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/index.tsx";
import { NextUIProvider } from "@nextui-org/react";

import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <NextUIProvider>
      <AppRoutes />
    </NextUIProvider>
  </StrictMode>
);
