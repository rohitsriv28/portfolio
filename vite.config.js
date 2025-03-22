import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Listen on all IP addresses
    open: true, // Automatically open the browser on server start
    // No port specified, so it defaults to 3000
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/"),
    },
  },
});
