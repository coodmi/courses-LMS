import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAppearance } from '@/hooks/use-appearance';
import setGlobalColorTheme from '@/lib/theme-colors';
import { SharedData } from '@/types/global';
import { usePage } from '@inertiajs/react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { HTMLAttributes } from 'react';

export default function Appearance({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
   const page = usePage<SharedData>();
   const { appearance, updateAppearance } = useAppearance(page.props.system.fields.theme || 'system');

   const getCurrentIcon = () => {
      switch (appearance) {
         case 'dark':
            return <Moon className="h-5 w-5" />;
         case 'light':
            return <Sun className="h-5 w-5" />;
         default:
            return <Monitor className="h-5 w-5" />;
      }
   };

   const appearanceHandler = (appearance: Appearance) => {
      updateAppearance(appearance);

      if (page.props.frontend) {
         setGlobalColorTheme(appearance, page.props.frontend.theme_color as ThemeColors);
      }
   };

   return (
      <div className={className} {...props}>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="secondary" size="icon" className="h-9 w-9 rounded-full">
                  {getCurrentIcon()}
                  <span className="sr-only">Toggle theme</span>
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
               <DropdownMenuItem onClick={() => appearanceHandler('light')} className="cursor-pointer">
                  <span className="flex items-center gap-2">
                     <Sun className="h-5 w-5" />
                     Light
                  </span>
               </DropdownMenuItem>
               <DropdownMenuItem onClick={() => appearanceHandler('dark')} className="cursor-pointer">
                  <span className="flex items-center gap-2">
                     <Moon className="h-5 w-5" />
                     Dark
                  </span>
               </DropdownMenuItem>
               <DropdownMenuItem onClick={() => appearanceHandler('system')} className="cursor-pointer">
                  <span className="flex items-center gap-2">
                     <Monitor className="h-5 w-5" />
                     System
                  </span>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   );
}
