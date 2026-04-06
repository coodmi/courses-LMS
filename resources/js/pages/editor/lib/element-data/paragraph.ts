import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            innerText: 'Paragraph text',
        },
        id: uuidv4(),
        name: 'Paragraph',
        type: 'paragraph' as const,
        className: '',
        styles: {},
    },
};
