import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            innerText: 'Button',
            buttonType: 'button',
        },
        id: uuidv4(),
        name: 'Button',
        type: 'button' as const,
        className:
            'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
        styles: {},
    },
};
