import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pkg from 'vite-plugin-gh-pages';
const VitePluginGhPages = pkg.default;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginGhPages],

})
