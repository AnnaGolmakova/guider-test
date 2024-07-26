import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

const legacyPluginOptions = {
  modernTargets: "since 2023-01-01, not dead",
  modernPolyfills: true,
  renderLegacyChunks: false,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy(legacyPluginOptions), react()],
  build: {
    target: ["chrome109", "edge109", "firefox109", "ios16.3", "safari16.3"],
  },
});
