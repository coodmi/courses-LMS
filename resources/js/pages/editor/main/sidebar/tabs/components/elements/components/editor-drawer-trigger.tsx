import SortableList from '@/pages/editor/main/dnd/SortableList';
import React from 'react';
import ElementWrapper from '../element-wrapper';

interface DrawerTriggerProps {
    element: EditorElement;
}

const EditorDrawerTrigger: React.FC<DrawerTriggerProps> = ({ element }) => {
    const { id, type, content } = element;

    const childIds = Array.isArray(content)
        ? (content as EditorElement[]).map((child) => child.id)
        : [];

    return (
        <ElementWrapper
            element={element}
            isContainer={true}
            tag="button"
            htmlAttributes={{ type: 'button' }}
        >
            {Array.isArray(content) && (
                <SortableList items={childIds} id={id} content={content} />
            )}
        </ElementWrapper>
    );
};

export default EditorDrawerTrigger;
