import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import './utils/image-lazy-load';

// Import safelist to ensure all editor classes are compiled
import './pages/editor/lib/tailwind-safelist';

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
   title: (title) => `${title}`,
   resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx', { eager: false })),
   setup({ el, App, props }) {
      const root = createRoot(el);

      root.render(<App {...props} />);
   },
   progress: {
      color: '#4B5563',
      delay: 250,
      includeCSS: true,
      showSpinner: true,
   },
});
