import { v4 as uuidv4 } from 'uuid';
import paragraph from './paragraph';

export default {
    elementDetails: {
        content: {
            placement: 'left',
            children: [
                {
                    ...paragraph.elementDetails,
                    content: {
                        innerText: 'Place content for the popover here.',
                    },
                },
            ],
        },
        id: uuidv4(),
        name: 'Popover Content',
        type: 'popoverContent' as const,
        className:
            'absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
        styles: {},
    },
};
