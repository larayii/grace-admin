import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
      },
      '/file': {
        target: 'http://localhost:9002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/file/, ''),
      },
      '/ws': {
        target: 'ws://localhost:7001',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/ws/, ''),
      },
    },
  },
  build: {
    manifest: true,
    sourcemap: true,
  },
});
