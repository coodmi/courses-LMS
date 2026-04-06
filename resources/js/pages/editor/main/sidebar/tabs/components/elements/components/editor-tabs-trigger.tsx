import SortableList from '@/pages/editor/main/dnd/SortableList';
import React from 'react';
import ElementWrapper from '../element-wrapper';

interface TabsTriggerProps {
    element: EditorElement;
}

const EditorTabsTrigger: React.FC<TabsTriggerProps> = ({ element }) => {
    const { id, type, content } = element;
    // Get data-state from htmlAttributes if available (set by tabs component in live mode)
    const dataState = element.htmlAttributes?.['data-state'];

    const childIds = Array.isArray(content)
        ? (content as EditorElement[]).map((child) => child.id)
        : [];

    return (
        <ElementWrapper
            element={element}
            isContainer={true}
            tag="button"
            htmlAttributes={{
                type: 'button',
                ...(dataState ? { 'data-state': dataState } : {}),
            }}
        >
            {Array.isArray(content) && (
                <SortableList items={childIds} id={id} content={content} />
            )}
        </ElementWrapper>
    );
};

export default EditorTabsTrigger;
