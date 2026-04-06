import { v4 as uuidv4 } from 'uuid';
import span from './span';

export default {
    elementDetails: {
        content: [
            {
                ...span.elementDetails,
                content: { innerText: 'List Item' },
            },
        ],
        id: uuidv4(),
        name: 'List Item',
        type: 'li' as const,
        className: '',
        styles: {},
    },
};
