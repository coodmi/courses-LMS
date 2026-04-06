import { v4 as uuidv4 } from 'uuid';
import li from './li';

export default {
    elementDetails: {
        content: [li.elementDetails, li.elementDetails, li.elementDetails],
        id: uuidv4(),
        name: 'Unordered List',
        type: 'ul' as const,
        className: '',
        styles: {},
    },
};
