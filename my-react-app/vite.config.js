import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,   

  },
 "builds": [
    {
      "src": "vite.config.js",
      "use": "@vercel/vite"
    }
  ]
});
