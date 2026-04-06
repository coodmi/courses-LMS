import { v4 as uuidv4 } from 'uuid';
import div from './div';

export default {
    elementDetails: {
        content: [div.elementDetails, div.elementDetails, div.elementDetails],
        id: uuidv4(),
        name: 'Three Columns',
        type: '3Col' as const,
        className: 'w-full grid grid-cols-1 md:grid-cols-3 gap-6 h-fit',
        styles: {},
    },
};
