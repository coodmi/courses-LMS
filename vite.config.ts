import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
   plugins: [
      laravel({
         input: ['resources/css/app.css', 'resources/js/app.tsx'],
         ssr: 'resources/js/ssr.tsx',
         refresh: true,
      }),
      react(),
      tailwindcss(),
   ],
   esbuild: {
      jsx: 'automatic',
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
   },
   resolve: {
      alias: {
         'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
      },
   },
   build: {
      target: 'es2015',
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
         output: {
            manualChunks(id) {
               // Core vendor libraries - only chunk stable libraries
               if (id.includes('node_modules')) {
                  // React ecosystem
                  if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
                     return 'react-vendor';
                  }
                  // Inertia
                  if (id.includes('@inertiajs')) {
                     return 'inertia-vendor';
                  }
                  // UI libraries
                  if (id.includes('@radix-ui') || id.includes('lucide-react')) {
                     return 'ui-vendor';
                  }
                  // DnD and charts
                  if (id.includes('@dnd-kit') || id.includes('recharts')) {
                     return 'interactive-vendor';
                  }
                  // DO NOT chunk editor libraries - they have circular dependencies
                  // Let TipTap, CodeMirror, Shiki bundle naturally with vendor
               }

               // Do NOT chunk page entry points - Laravel needs them in manifest
               // Only chunk shared components/utilities
               if (id.includes('/components/ui/') && !id.includes('/pages/')) {
                  return 'ui-components';
               }
            },
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
         },
      },
      chunkSizeWarningLimit: 500,
      sourcemap: false,
      reportCompressedSize: false,
   },
});
