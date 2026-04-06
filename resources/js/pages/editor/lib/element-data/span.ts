import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            innerText: 'Span text',
        },
        id: uuidv4(),
        name: 'Span',
        type: 'span' as const,
        className: '',
        styles: {},
    },
};
