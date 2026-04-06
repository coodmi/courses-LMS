'use client';

/**
 * Sortable List Wrapper
 * Creates a sortable context for a list of items
 */

import {
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import React from 'react';

interface SortableListProps {
    items: string[]; // Array of item IDs
    children: React.ReactNode;
    id?: string; // Optional container ID
}

const SortableList: React.FC<SortableListProps> = ({ items, children, id }) => {
    return (
        <SortableContext
            id={id}
            items={items}
            strategy={verticalListSortingStrategy}
        >
            {children}
        </SortableContext>
    );
};

export default SortableList;
