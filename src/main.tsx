import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/index.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>,
);
