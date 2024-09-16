import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    cors: true,
    proxy: {
      "/api": {
        target: import.meta.env.VITE_BASE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});
