import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/react-pdf-highlighter/",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  server: {
    port: 3003,
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
