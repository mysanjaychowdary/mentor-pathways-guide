import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { createTanStackServerFn } from "@tanstack/react-start/server";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        preset: "node-server",
      },
    }),
    tsconfigPaths(),
    react(),
    tailwindcss(),
  ],
});