import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            innerText: 'Label',
        },
        id: uuidv4(),
        name: 'Label',
        type: 'label' as const,
        className:
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        styles: {},
    },
};
