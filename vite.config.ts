import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({ 
      preset: "vercel",
      externals: {
        inline: ["tslib"]
      }
    }),
    react(),
  ],
  resolve: {
    alias: {
      'tslib': 'tslib/tslib.es6.mjs'
    },
    tsconfigPaths: true,
  },
  server: {
    host: "::",
    port: 5173,
  },
});
