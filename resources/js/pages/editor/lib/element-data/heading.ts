import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            innerText: 'Heading',
            level: 'h2',
        },
        id: uuidv4(),
        name: 'Heading',
        type: 'heading' as const,
        className: '',
        styles: {},
    },
};
