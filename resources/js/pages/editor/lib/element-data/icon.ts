import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: { icon: 'star' },
        id: uuidv4(),
        name: 'Icon',
        type: 'icon' as const,
        className: 'text-foreground',
        styles: {
            width: '24px',
            height: '24px',
        },
    },
};
