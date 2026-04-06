/**
 * Image Lazy Loading Utility
 * Adds loading="lazy" and decoding="async" to all images
 */

export const optimizeImages = () => {
   if (typeof window === 'undefined') return;

   // Add lazy loading to all images
   const images = document.querySelectorAll('img:not([loading])');
   images.forEach((img) => {
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
   });

   // Preload critical above-the-fold images
   const criticalImages = document.querySelectorAll('img[data-critical="true"]');
   criticalImages.forEach((img) => {
      img.setAttribute('loading', 'eager');
      img.setAttribute('fetchpriority', 'high');
   });
};

// Run on DOM ready
if (typeof window !== 'undefined') {
   if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
   } else {
      optimizeImages();
   }
}
