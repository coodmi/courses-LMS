import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            placement: 'left',
            children: [],
        },
        id: uuidv4(),
        name: 'Dropdown Content',
        type: 'dropdownMenuContent' as const,
        className:
            'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        styles: { width: '140px' },
    },
};
