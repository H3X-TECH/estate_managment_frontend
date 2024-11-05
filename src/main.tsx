import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/Router";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast, Toaster } from "sonner";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 3,
    },
    // mutations: {}
  },
  queryCache: new QueryCache({
    onError: (err) => {
      console.log("query error ", err);
      toast.error(err.message);
    },
  }),
  mutationCache: new MutationCache({
    onError: (err) => {
      console.log("mutation error ", err);
      toast.error(err.message);
    },
  }),
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors />
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
