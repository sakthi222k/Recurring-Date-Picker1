import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global `expect`, `describe`, etc.
    setupFiles: "./setupFile.js",
    environment: "jsdom",
  },
});
