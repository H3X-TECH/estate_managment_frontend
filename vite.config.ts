import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

console.log("import meta", import.meta.env);
console.log("process env ", process.env.VITE_BASE_API_URL);
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // define: {
    //   API_BASE_URL: JSON.stringify(env.VITE_BASE_API_URL),
    // },
    resolve: {
      alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
      cors: true,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [react()],
  };
});
