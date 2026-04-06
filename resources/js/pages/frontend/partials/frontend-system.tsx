import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import setGlobalColorTheme from '@/lib/theme-colors';
import { SystemProps } from '@/pages/dashboard/settings/system';
import { SharedData } from '@/types/global';
import { router, usePage } from '@inertiajs/react';
import { Settings } from 'lucide-react';
import { useState } from 'react';

const FrontendSystem = () => {
   const { props } = usePage<SharedData & SystemProps>();
   const [modal, setModal] = useState<boolean>(false);

   const frontendHandler = () => {
      router.post(
         route('settings.system.update', { id: props.system.id }),
         {
            ...props.system.fields,
            frontend: !props.system.fields.frontend,
         },
         {
            onSuccess: (res: any) => {
               setModal(false);
               const { system, frontend, appearance } = res.props;

               if (system.fields.frontend) {
                  setGlobalColorTheme(appearance, frontend?.theme_color as ThemeColors);
               } else {
                  setGlobalColorTheme(appearance, 'Zinc');
               }
            },
         },
      );
   };

   return (
      <Dialog open={modal} onOpenChange={setModal}>
         <DialogTrigger asChild>
            <Button className="px-3">
               <Settings className="h-4 w-4" />
               {props.system.fields.frontend ? 'Disable' : 'Enable'} <span>Frontend</span>
            </Button>
         </DialogTrigger>

         <DialogContent className="px-6 py-8 sm:max-w-[425px]">
            <div className="bg-destructive/5 rounded-xl p-4">
               <p className="text-destructive text-center text-sm">
                  {props.system.fields.frontend
                     ? 'When disable this then the website frontend system will back to the previous system where able to customize the frontend from the home page directly. Are you sure you want to disable frontend editor?'
                     : 'Enabling frontend editor will allow you to edit the frontend of your website by the nocode editor. After enabling this, your current frontend system will be disabled. Are you sure you want to enable frontend editor?'}
               </p>
            </div>

            <div className="mb-0 flex items-center justify-center gap-6">
               <Button
                  onClick={() => setModal(false)}
                  className="text-destructive border-destructive border bg-transparent px-5 hover:bg-transparent"
               >
                  Cancel
               </Button>

               <Button type="button" onClick={frontendHandler} className="hover:bg-primary-hover bg-primary px-5">
                  Submit
               </Button>
            </div>
         </DialogContent>
      </Dialog>
   );
};

export default FrontendSystem;
