import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: [],
        id: uuidv4(),
        name: 'Container',
        type: 'container' as const,
        className: 'max-w-[1280px] mx-auto w-full px-6',
        styles: {},
    },
};
