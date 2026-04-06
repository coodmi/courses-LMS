import { cn } from '@/lib/utils';
import { SharedData } from '@/types/global';
import { usePage } from '@inertiajs/react';

const TextLogo = ({ className, light }: { className?: string; light?: boolean }) => (
   <span className={cn('font-bold text-xl tracking-tight', light ? 'text-white' : 'text-foreground', className)}>
      Alpha<span style={{ color: '#22c55e' }}>LMS</span>
   </span>
);

const AppLogo = ({ className, theme }: { theme?: 'light' | 'dark'; className?: string }) => {
   const { system } = usePage<SharedData>().props;

   if (theme === 'dark') {
      return system.fields.logo_dark
         ? <img src={system.fields.logo_dark} alt={system.fields.name || ''} className={cn('block h-6 w-auto', className)} />
         : <TextLogo className={className} />;
   }

   if (theme === 'light') {
      return system.fields.logo_light
         ? <img src={system.fields.logo_light} alt={system.fields.name || ''} className={cn('block h-6 w-auto', className)} />
         : <TextLogo className={className} light />;
   }

   return (
      <>
         {system.fields.logo_dark
            ? <img src={system.fields.logo_dark} alt={system.fields.name || ''} className={cn('block h-6 w-auto dark:hidden', className)} />
            : <TextLogo className={cn('dark:hidden', className)} />
         }
         {system.fields.logo_light
            ? <img src={system.fields.logo_light} alt={system.fields.name || ''} className={cn('hidden h-6 w-auto dark:block', className)} />
            : <TextLogo className={cn('hidden dark:block', className)} light />
         }
      </>
   );
};

export default AppLogo;
