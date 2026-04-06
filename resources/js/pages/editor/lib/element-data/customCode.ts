import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            code: '<div>Custom Code Block</div>',
        },
        id: uuidv4(),
        name: 'Custom Code',
        type: 'customCode' as const,
        className: '',
        styles: {},
    },
};
