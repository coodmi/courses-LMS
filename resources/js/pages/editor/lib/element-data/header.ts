import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: [],
        id: uuidv4(),
        name: 'Header',
        type: 'header' as const,
        className: '',
        styles: {},
    },
};
