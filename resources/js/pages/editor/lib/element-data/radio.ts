import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            label: 'Radio',
            name: '',
            value: 'option',
            checked: false,
        },
        id: uuidv4(),
        name: 'Radio',
        type: 'radio' as const,
        className:
            'aspect-square size-4 rounded-full border border-input text-primary shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50',
        styles: {},
    },
};
