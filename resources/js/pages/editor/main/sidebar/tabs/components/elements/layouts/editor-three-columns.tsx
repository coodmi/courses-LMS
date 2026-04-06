'use client';

import { cn } from '@/lib/utils';
import { useEditor } from '@/pages/editor/hooks/use-editor';
import SortableList from '@/pages/editor/main/dnd/SortableList';
import ElementWrapper from '../element-wrapper';

interface EditorThreeColumnsProps {
    element: EditorElement;
}

const EditorEditorThreeColumns = ({ element }: EditorThreeColumnsProps) => {
    const { editor: editorState } = useEditor();
    const { editor } = editorState;
    const { id, type, content } = element;

    const childIds = Array.isArray(content)
        ? (content as EditorElement[]).map((child) => child.id)
        : [];

    return (
        <ElementWrapper
            tag="div"
            element={element}
            isContainer={true}
            wrapperClassName={cn('relative transition-all', {
                'p-2': !editor.liveMode && !editor.previewMode,
            })}
        >
            {Array.isArray(content) && (
                <SortableList items={childIds} id={id} content={content} />
            )}
        </ElementWrapper>
    );
};

export default EditorEditorThreeColumns;
