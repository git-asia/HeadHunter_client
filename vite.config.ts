import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
//const { createEnvCompatiblePlugin } = require('vite-plugin-env-compatible');

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    sassDts(),
    // createEnvCompatiblePlugin({
    //   mappings: {
    //     VITE_API_URL: 'process.env.VITE_API_URL',
    //   },
    // }),
  ],
  build: {
    outDir: 'dist',
  },
});
