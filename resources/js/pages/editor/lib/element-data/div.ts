import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: [],
        id: uuidv4(),
        name: 'Div',
        type: 'div' as const,
        className: '',
        styles: {},
    },
};
