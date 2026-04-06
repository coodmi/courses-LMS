import SortableList from '@/pages/editor/main/dnd/SortableList';
import React from 'react';
import ElementWrapper from '../element-wrapper';

interface AccordionTriggerProps {
    element: EditorElement;
}

const EditorAccordionTrigger: React.FC<AccordionTriggerProps> = ({
    element,
}) => {
    const { id, type, content } = element;

    const childIds = Array.isArray(content)
        ? (content as EditorElement[]).map((child) => child.id)
        : [];

    return (
        <ElementWrapper element={element} isContainer={true} tag="div">
            {Array.isArray(content) && (
                <SortableList items={childIds} id={id} content={content} />
            )}
        </ElementWrapper>
    );
};

export default EditorAccordionTrigger;
