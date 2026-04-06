import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
   children: ReactNode;
   componentRef?: string;
   fallback?: ReactNode;
}

interface State {
   hasError: boolean;
   error: Error | null;
}

/**
 * Error Boundary for Dynamic Components
 * Catches rendering errors in dynamic components and displays a fallback UI
 */
class DynamicComponentErrorBoundary extends Component<Props, State> {
   constructor(props: Props) {
      super(props);
      this.state = {
         hasError: false,
         error: null,
      };
   }

   static getDerivedStateFromError(error: Error): State {
      return {
         hasError: true,
         error,
      };
   }

   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Dynamic Component Error:', {
         componentRef: this.props.componentRef,
         error,
         errorInfo,
      });
   }

   render() {
      if (this.state.hasError) {
         if (this.props.fallback) {
            return this.props.fallback;
         }

         return (
            <div className="border-destructive/50 bg-destructive/5 flex min-h-[100px] flex-col items-center justify-center rounded-lg border-2 border-dashed p-6">
               <div className="text-center">
                  <div className="text-destructive mb-2 text-sm font-semibold">⚠️ Component Error</div>
                  <div className="text-muted-foreground mb-2 text-xs">
                     {this.props.componentRef ? `Component "${this.props.componentRef}" failed to render` : 'Dynamic component failed to render'}
                  </div>
                  {this.state.error && (
                     <div className="text-destructive mt-2 max-w-md text-xs">
                        <details className="cursor-pointer">
                           <summary className="font-semibold">Error Details</summary>
                           <pre className="mt-2 overflow-auto rounded bg-black/5 p-2 text-left text-[10px]">{this.state.error.message}</pre>
                        </details>
                     </div>
                  )}
               </div>
            </div>
         );
      }

      return this.props.children;
   }
}

export default DynamicComponentErrorBoundary;
