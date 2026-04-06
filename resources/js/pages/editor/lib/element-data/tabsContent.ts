import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: [],
        id: uuidv4(),
        name: 'Tabs Content',
        type: 'tabsContent' as const,
        className: 'mt-2 p-2 ring-offset-background',
        styles: {},
    },
};
