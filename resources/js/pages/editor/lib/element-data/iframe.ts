import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            src: '',
            title: 'Iframe',
            width: '100%',
            height: '400',
        },
        id: uuidv4(),
        name: 'Iframe',
        type: 'iframe' as const,
        className: '',
        styles: {},
    },
};
