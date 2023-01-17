import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@interfaces', replacement: '/src/interfaces' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
  plugins: [react()],
});
