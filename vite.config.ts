import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/deckbuilding-roguelike-front/",
  plugins: [react(), tsconfigPaths()],
});
