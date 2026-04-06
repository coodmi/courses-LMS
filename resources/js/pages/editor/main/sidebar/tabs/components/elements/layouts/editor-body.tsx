import { cn } from '@/lib/utils';
import { useEditor } from '@/pages/editor/hooks/use-editor';
import SortableList from '@/pages/editor/main/dnd/SortableList';
import React from 'react';
import ElementWrapper from '../element-wrapper';

interface BodyProps {
   element: EditorElement;
}

const EditorBody: React.FC<BodyProps> = ({ element }) => {
   const { editor: editorState } = useEditor();
   const { editor } = editorState;
   const { id, type, content } = element;

   const childIds = Array.isArray(content) ? (content as EditorElement[]).map((child) => child.id) : [];

   return (
      <ElementWrapper
         tag="div"
         element={element}
         isContainer={true}
         showDeleteButton={false}
         wrapperClassName={cn(
            'relative h-full min-h-screen w-full',
            {
               'px-5 pt-5': !editor.liveMode && !editor.previewMode,
            },
            // !editor.liveMode && !editor.previewMode ? 'min-h-[calc(100vh-65px)] px-5 pt-5' : 'min-h-screen',
         )}
      >
         {Array.isArray(content) && <SortableList items={childIds} id={id} content={content} />}
      </ElementWrapper>
   );
};

export default EditorBody;
