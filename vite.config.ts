import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Personal-Website/",
  server:{open:true,
  port:3001,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
