import { v4 as uuidv4 } from 'uuid';
import dropdownMenuContent from './dropdownMenuContent';
import dropdownMenuItem from './dropdownMenuItem';
import dropdownMenuLabel from './dropdownMenuLabel';
import dropdownMenuTrigger from './dropdownMenuTrigger';

export default {
    elementDetails: {
        content: [
            dropdownMenuTrigger.elementDetails,
            {
                ...dropdownMenuContent.elementDetails,
                content: {
                    placement: 'left',
                    children: [
                        dropdownMenuLabel.elementDetails,
                        dropdownMenuItem.elementDetails,
                    ],
                },
            },
        ],
        id: uuidv4(),
        name: 'Dropdown Menu',
        type: 'dropdownMenu' as const,
        className: 'relative inline-block',
        styles: {},
    },
};
