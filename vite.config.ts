import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  base: "http://90.156.209.113/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "localhost",
    port: 3001,
  },
});
