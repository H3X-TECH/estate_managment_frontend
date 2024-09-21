import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/index.tsx";
import { NextUIProvider } from "@nextui-org/react";

import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast, Toaster } from "sonner";

import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
    // mutations: {}
  },
  mutationCache: new MutationCache({
    onError: (err) => {
      console.log("mutation error ", err);
      toast.error(err.message);
    },
  }),
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors />
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextUIProvider>
  </StrictMode>
);
