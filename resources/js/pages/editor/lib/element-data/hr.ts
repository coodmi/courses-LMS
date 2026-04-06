import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {},
        id: uuidv4(),
        name: 'Horizontal Rule',
        type: 'hr' as const,
        className: 'border-t border-border',
        styles: {},
    },
};
