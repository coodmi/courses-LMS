import { cn } from '@/lib/utils';
import { useEditor } from '@/pages/editor/hooks/use-editor';
import SortableList from '@/pages/editor/main/dnd/SortableList';
import React from 'react';
import ElementWrapper from '../element-wrapper';

interface HeaderProps {
    element: EditorElement;
}

const EditorHeader: React.FC<HeaderProps> = ({ element }) => {
    const { editor: editorState } = useEditor();
    const { editor } = editorState;
    const { id, type, content } = element;

    const childIds = Array.isArray(content)
        ? (content as EditorElement[]).map((child) => child.id)
        : [];

    return (
        <ElementWrapper
            tag="header"
            element={element}
            isContainer={true}
            wrapperClassName={cn('relative w-full transition-all', {
                'p-2': !editor.liveMode && !editor.previewMode,
            })}
        >
            {Array.isArray(content) && (
                <SortableList items={childIds} id={id} content={content} />
            )}
        </ElementWrapper>
    );
};

export default EditorHeader;
