import { v4 as uuidv4 } from 'uuid';

export default {
    elementDetails: {
        content: [],
        id: uuidv4(),
        name: 'Tabs List',
        type: 'tabsList' as const,
        className:
            'inline-flex items-center rounded-md bg-muted p-1 text-muted-foreground w-full',
        styles: {},
    },
};
