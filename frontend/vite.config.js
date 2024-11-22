import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Adresse correcte du backend
        changeOrigin: true,
        secure: false, // Si vous utilisez HTTPS pour le backend, mettez à jour en conséquence
      },
    },
  },
});
