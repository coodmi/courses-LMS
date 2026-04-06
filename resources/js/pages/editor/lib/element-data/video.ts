import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            src: '',
        },
        id: uuidv4(),
        name: 'Video',
        type: 'video' as const,
        className: '',
        styles: {
            width: '100%',
            height: 'auto',
        },
    },
};
