'use client';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { EditorProps } from '@/pages/editor';
import { useEditor } from '@/pages/editor/hooks/use-editor';
import EditorAppearance from '@/pages/editor/main/navbar/partials/appearance';
import EditorDeviceMode from '@/pages/editor/main/navbar/partials/device-mode';
import EditorPreview from '@/pages/editor/main/navbar/partials/preview';
import EditorRedoUndo from '@/pages/editor/main/navbar/partials/redo-undo';
import { Link, router, usePage } from '@inertiajs/react';
import { Home, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const EditorNavigation = () => {
   const { props } = usePage<EditorProps>();
   const { project, page } = props;
   const { editor, dispatch } = useEditor();
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      dispatch({
         type: 'SET_PROJECT_PAGE_ID',
         payload: {
            projectPageId: page.id as string,
         },
      });
   }, [page]);

   const handlePreviewClick = () => {
      dispatch({ type: 'TOGGLE_PREVIEW_MODE' });
      dispatch({ type: 'TOGGLE_LIVE_MODE' });
   };

   const handleUndo = () => {
      dispatch({ type: 'UNDO' });
   };

   const handleRedo = () => {
      dispatch({ type: 'REDO' });
   };

   const handleSave = async () => {
      setIsLoading(true);
      const content = JSON.stringify(editor.editor.elements);

      router.put(
         route('page.content', {
            project: project.id as number,
            page: page.id as number,
         }),
         { content },
         {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
               dispatch({ type: 'CLEAR_HISTORY' });
               // toast.success('Success', {
               //    description: 'Saved content',
               // });
               setIsLoading(false);
            },
            onError: () => {
               toast.error('Oopse!', {
                  description: 'Could not save content',
               });
               setIsLoading(false);
            },
         },
      );
   };

   const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 's' && (event.ctrlKey || event.metaKey)) {
         event.preventDefault();
         handleSave();
      } else if (event.key === 'z' && (event.ctrlKey || event.metaKey) && !event.shiftKey) {
         event.preventDefault();
         handleUndo();
      } else if (event.key === 'z' && (event.ctrlKey || event.metaKey) && event.shiftKey) {
         event.preventDefault();
         handleRedo();
      } else if (event.key === 'y' && (event.ctrlKey || event.metaKey)) {
         event.preventDefault();
         handleRedo();
      } else if (event.key === 'p' && (event.ctrlKey || event.metaKey)) {
         event.preventDefault();
         handlePreviewClick();
      }
   };

   useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);

      // Also add listener to iframe content if it exists
      const iframe = document.querySelector('iframe') as HTMLIFrameElement;
      const iframeDoc = iframe?.contentDocument || iframe?.contentWindow?.document;

      if (iframeDoc) {
         iframeDoc.addEventListener('keydown', handleKeyDown);
      }

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
         if (iframeDoc) {
            iframeDoc.removeEventListener('keydown', handleKeyDown);
         }
      };
   }, [editor]);

   const handleCompactSidebar = () => {
      dispatch({
         type: 'SET_COMPACT_SIDEBAR',
         payload: { compactSidebar: false },
      });
   };

   if (editor.editor.liveMode || editor.editor.previewMode) {
      return null;
   }

   return (
      <nav className="flex h-16 items-center justify-between gap-2 border-b px-4 py-2 transition-all md:px-6">
         <aside className="flex items-center gap-2">
            {editor.editor.windowWidth < 1024 && (
               <Button size="icon" variant="secondary" className="h-9 w-9 shadow-md" onClick={handleCompactSidebar}>
                  <Menu className="h-5 w-5" />
               </Button>
            )}
            <Tooltip>
               <TooltipTrigger asChild>
                  <Link href={route('pages.index')}>
                     <Button variant="outline" size="icon">
                        <Home className="h-5 w-5" aria-label="Back" />
                     </Button>
                  </Link>
               </TooltipTrigger>
               <TooltipContent>
                  <p className="inline-flex items-center gap-2">Back to Pages</p>
               </TooltipContent>
            </Tooltip>

            {/* ModeToggle has its own dropdown, no tooltip needed */}
            <EditorAppearance />

            {/* Preview has its own dropdown, no tooltip needed */}
            <EditorPreview />
         </aside>

         <aside>
            <EditorDeviceMode />
         </aside>

         <aside className="flex items-center gap-2">
            <EditorRedoUndo />

            <div className="relative flex flex-col gap-1">
               <Button onClick={handleSave} disabled={isLoading} className="px-3 md:px-4">
                  Save{' '}
                  {editor.history.history.length > 1 && `(${editor.history.history.length - 1 <= 50 ? editor.history.history.length - 1 : '50+'})`}
               </Button>
            </div>
         </aside>
      </nav>
   );
};

export default EditorNavigation;
