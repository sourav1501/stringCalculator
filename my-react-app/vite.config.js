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
      "src": "src/main.jsx",
      "use": "@vercel/vite"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.jsx" 
    }
  ]

});
