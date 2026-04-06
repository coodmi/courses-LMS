import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import setGlobalColorTheme from '@/lib/theme-colors';
import { SharedData } from '@/types/global';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, useEffect } from 'react';
import { toast } from 'sonner';

const Main = ({ children }: PropsWithChildren) => {
   const { props } = usePage<SharedData>();
   const { frontend, direction } = props;

   useEffect(() => {
      if (props.flash.error) {
         toast.error(props.flash.error);
      }

      if (props.flash.success || props.flash.warning) {
         toast.success(props.flash.success || props.flash.warning);
      }
   }, [props.flash]);

   useEffect(() => {
      // Update direction on <html> tag dynamically
      document.documentElement.setAttribute('dir', direction);
   }, [direction]);

   useEffect(() => {
      if (frontend) {
         setGlobalColorTheme(props.appearance, frontend.theme_color);
      }
   }, []);

   return (
      <>
         <Toaster />

         <TooltipProvider>{children}</TooltipProvider>
      </>
   );
};

export default Main;
