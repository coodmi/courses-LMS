import { cn } from '@/lib/utils';
import { useEditor } from '@/pages/editor/hooks/use-editor';
import SortableList from '@/pages/editor/main/dnd/SortableList';
import React from 'react';
import ElementWrapper from '../element-wrapper';

interface LiProps {
    element: EditorElement;
}

const EditorLi: React.FC<LiProps> = ({ element }) => {
    const { editor: editorState } = useEditor();
    const { editor } = editorState;
    const { id, type, content } = element;

    const childIds = Array.isArray(content)
        ? (content as EditorElement[]).map((child) => child.id)
        : [];

    return (
        <ElementWrapper
            tag="li"
            element={element}
            isContainer={true}
            wrapperClassName={cn('group relative min-h-[40px] transition-all', {
                'p-2': !editor.liveMode && !editor.previewMode,
            })}
        >
            {Array.isArray(content) && (
                <SortableList items={childIds} id={id} content={content} />
            )}
        </ElementWrapper>
    );
};

export default EditorLi;
