import { v4 as uuidv4 } from 'uuid';
import container from './container';

export default {
    elementDetails: {
        content: [container.elementDetails],
        id: uuidv4(),
        name: 'Section',
        type: 'section' as const,
        className: '',
        styles: {},
    },
};
