import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: {
            code: '<div>Dynamic Content</div>',
        },
        id: uuidv4(),
        name: 'Dynamic Content',
        type: 'dynamicContent' as const,
        className: '',
        styles: {},
    },
};
