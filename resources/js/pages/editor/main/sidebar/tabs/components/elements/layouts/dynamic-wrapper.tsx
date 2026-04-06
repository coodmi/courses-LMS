import { useEditor } from '@/pages/editor/hooks/use-editor';
import DynamicComponentErrorBoundary from '@/pages/editor/lib/dynamic-component-error-boundary';
import { getDynamicComponent } from '@/pages/editor/lib/dynamic-component-registry';
import { usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import ElementWrapper from '../element-wrapper';

interface DynamicWrapperProps {
   element: EditorElement;
}

/**
 * Wrapper component for rendering stateful/functional React components
 * Does NOT serialize children - preserves full React functionality
 */
const DynamicWrapper: React.FC<DynamicWrapperProps> = ({ element }) => {
   const page = usePage();
   const { editor: editorState } = useEditor();
   const { editor } = editorState;
   const { content, className, styles } = element;

   const [apiData, setApiData] = useState<any>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   // Extract content properties
   const componentRef = typeof content === 'object' && 'componentRef' in content ? content.componentRef : undefined;
   const api = typeof content === 'object' && 'api' in content ? content.api : undefined;
   const apiMethod = typeof content === 'object' && 'apiMethod' in content ? content.apiMethod : 'GET';

   // Fetch API data if api endpoint is provided (works in both edit and live mode)
   useEffect(() => {
      if (!api) return;

      const fetchData = async () => {
         setLoading(true);
         setError(null);
         try {
            const response = await fetch(`${window.location.origin}/${api}`, {
               method: apiMethod,
               headers: {
                  'Content-Type': 'application/json',
               },
            });

            if (!response.ok) {
               throw new Error(`API error: ${response.statusText}`);
            }

            const data = await response.json();
            setApiData(data);
         } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch data');
            console.error('API fetch error:', err);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [api, apiMethod, editor.liveMode]);

   // Get the component
   const Component = componentRef ? getDynamicComponent(componentRef) : null;

   // In edit mode: render actual component wrapped in ElementWrapper for selection
   if (!editor.liveMode) {
      if (!Component) {
         // Show placeholder if no component configured
         return (
            <ElementWrapper tag="div" element={element} isContainer={false} wrapperClassName="relative">
               <div
                  className={`border-primary/50 bg-primary/5 flex min-h-[100px] flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 ${className || ''}`}
                  style={styles}
               >
                  <div className="text-center">
                     <div className="text-primary mb-2 text-sm font-semibold">🎯 Dynamic Wrapper</div>
                     {!componentRef && !api && <div className="text-muted-foreground text-xs italic">No component configured</div>}
                     {componentRef && <div className="text-destructive text-xs">Component "{componentRef}" not found</div>}
                  </div>
               </div>
            </ElementWrapper>
         );
      }

      // Render actual component in edit mode
      return (
         <ElementWrapper tag="div" element={element} isContainer={false} wrapperClassName="relative w-full">
            <div className={className} style={styles}>
               <DynamicComponentErrorBoundary componentRef={componentRef}>
                  {api ? (
                     // API mode in editor - show loading/error/data
                     loading ? (
                        <div className="flex items-center justify-center p-8">
                           <div className="text-muted-foreground">Loading...</div>
                        </div>
                     ) : error ? (
                        <div className="flex items-center justify-center p-8">
                           <div className="text-destructive">Error: {error}</div>
                        </div>
                     ) : (
                        <Component data={apiData} />
                     )
                  ) : (
                     // Static mode - render component without data
                     <Component />
                  )}
               </DynamicComponentErrorBoundary>
            </div>
         </ElementWrapper>
      );
   }

   // In live mode: render the actual component (same logic as edit mode but without ElementWrapper)
   if (!Component) {
      return (
         <div className={className} style={styles}>
            <div className="flex items-center justify-center p-8">
               <div className="text-muted-foreground">
                  {!componentRef ? 'Dynamic wrapper not configured' : `Component "${componentRef}" not found`}
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className={className} style={styles}>
         <DynamicComponentErrorBoundary componentRef={componentRef}>
            {api ? (
               // API mode - show loading/error/data
               loading ? (
                  <div className="flex items-center justify-center p-8">
                     <div className="text-muted-foreground">Loading...</div>
                  </div>
               ) : error ? (
                  <div className="flex items-center justify-center p-8">
                     <div className="text-destructive">Error: {error}</div>
                  </div>
               ) : (
                  <Component data={apiData} />
               )
            ) : (
               // Static mode
               <Component />
            )}
         </DynamicComponentErrorBoundary>
      </div>
   );
};

export default DynamicWrapper;
