import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import sassDts from 'vite-plugin-sass-dts'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
//const { createEnvCompatiblePlugin } = require('vite-plugin-env-compatible');

export default defineConfig({
    plugins: [
        react(),
        eslint(),
        sassDts(),
        tsconfigPaths(),
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
