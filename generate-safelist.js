// This script generates the complete safelist component with all TAILWIND_CLASSES
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the tailwind-class-input.tsx file
const inputFile = path.join(__dirname, 'resources/js/pages/editor/main/tailwind-class-input.tsx');
const content = fs.readFileSync(inputFile, 'utf8');

// Extract TAILWIND_CLASSES array
const match = content.match(/export const TAILWIND_CLASSES = \[([\s\S]*?)\];/);
if (!match) {
  console.error('Could not find TAILWIND_CLASSES array');
  process.exit(1);
}

// Parse the array content
const arrayContent = match[1];
const classes = [];

// Extract all string literals
const stringMatches = arrayContent.matchAll(/'([^']+)'/g);
for (const match of stringMatches) {
  classes.push(match[1]);
}

// Extract spread operations (generateColorClasses, generateGradientColorClasses)
const hasColorClasses = arrayContent.includes('...generateColorClasses()');
const hasGradientClasses = arrayContent.includes('...generateGradientColorClasses()');

// Generate color classes
if (hasColorClasses) {
  const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  const properties = ['text', 'bg', 'border'];

  properties.forEach(prop => {
    colors.forEach(color => {
      shades.forEach(shade => {
        classes.push(`${prop}-${color}-${shade}`);
        classes.push(`hover:${prop}-${color}-${shade}`);
      });
    });
  });
}

// Generate gradient classes
if (hasGradientClasses) {
  const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  const properties = ['from', 'via', 'to'];

  properties.forEach(prop => {
    colors.forEach(color => {
      shades.forEach(shade => {
        classes.push(`${prop}-${color}-${shade}`);
      });
    });
  });
}

// Remove duplicates
const uniqueClasses = [...new Set(classes)];

console.log(`Total classes: ${uniqueClasses.length}`);

// Generate the safelist component
const safelistComponent = `/**
 * Tailwind CSS Safelist Component
 * 
 * This component contains ALL Tailwind classes as static strings.
 * Tailwind v4 scans this file and includes these classes in both dev and production builds.
 * 
 * DO NOT REMOVE - Required for editor functionality
 * 
 * Total classes: ${uniqueClasses.length}
 */

export const TailwindSafelist = () => {
   return (
      <div className="hidden ${uniqueClasses.join(' ')}">
         Tailwind safelist - ${uniqueClasses.length} classes
      </div>
   );
};

// Export the classes array for other uses
export { TAILWIND_CLASSES } from '../main/tailwind-class-input';
`;

// Write the safelist component
const outputFile = path.join(__dirname, 'resources/js/pages/editor/lib/tailwind-safelist.tsx');
fs.writeFileSync(outputFile, safelistComponent);

console.log(`Generated safelist component with ${uniqueClasses.length} classes`);
console.log(`Written to: ${outputFile}`);

// node generate-safelist.js :Run command to generate classes