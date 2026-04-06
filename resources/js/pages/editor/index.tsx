import { TooltipProvider } from '@/components/ui/tooltip';
import Main from '@/layouts/main';
import EditorProvider from '@/pages/editor/providers/editor-provider';
import { SharedData } from '@/types/global';
import { Head } from '@inertiajs/react';
import EditorNavigation from './main/navbar';
import EditorPageBuilder from './main/page-builder';
import EditorSidebar from './main/sidebar';

export interface EditorProps extends SharedData {
   project: Project;
   page: ProjectPage;
}

export default function Index({ project, page }: EditorProps) {
   return (
      <EditorProvider projectId={project.id as string} pageDetails={page}>
         <Head title={`Edit ${page.name} - ${project.name}`} />

         <TooltipProvider>
            <Main>
               <div id="builderEditor" className="bg-background flex">
                  <EditorSidebar />

                  <div className="h-screen w-full">
                     <EditorNavigation />

                     <EditorPageBuilder />
                  </div>
               </div>
            </Main>
         </TooltipProvider>
      </EditorProvider>
   );
}
