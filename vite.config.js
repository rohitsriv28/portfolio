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
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,

    // Rollup options for better code splitting
    rollupOptions: {
      output: {
        // Manually split chunks
        manualChunks(id) {
          // Split node_modules into a vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }

          // Optional: Further code splitting based on your app's structure
          if (id.includes("/components/")) {
            return "components";
          }
        },
      },
    },

    // Remove Terser-specific options
    minify: "esbuild", // Use esbuild (default) or 'swc'
  },

  // Performance hints
  performance: {
    // Warn about assets larger than 500kb
    maxEntrypointSize: 500 * 1024,
    maxAssetSize: 500 * 1024,
    hints: "warning",
  },
});
