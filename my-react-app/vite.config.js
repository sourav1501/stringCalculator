import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,   

  },
    "version": 2,
    "builds": [
      {
        "src": "string-calculator/vite.config.js",
        "use": "@vercel/vite"
      }
    ],
    "routes": [
      {
        "handle": "filesystem"
      },
      {
        "src": "/(.*)",
        "dest": "index.html" 
      }
    ]

});
