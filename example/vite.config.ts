import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/react-pdf-highlighter/",
  build: {
    outDir: "dist",
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-dom/client",
        "react-rnd",
        "pdfjs-dist",
        "pdfjs-dist/web",
        "debounce",
      ],
    },
  },
  plugins: [react()],
  server: {
    port: 3003,
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
