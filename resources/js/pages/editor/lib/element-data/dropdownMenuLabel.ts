import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            innerText: 'Dropdown Label',
        },
        id: uuidv4(),
        name: 'Dropdown Label',
        type: 'dropdownMenuLabel' as const,
        className: 'px-2 py-1.5 text-sm font-semibold',
        styles: {
            width: '100%',
        },
    },
};
