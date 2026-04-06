import { v4 as uuidv4 } from 'uuid';
import paragraph from './paragraph';

export default {
    elementDetails: {
        content: {
            placement: 'left',
            children: [
                {
                    ...paragraph.elementDetails,
                    content: {
                        innerText: 'Place content for the drawer here.',
                    },
                },
            ],
        },
        id: uuidv4(),
        name: 'Drawer Content',
        type: 'drawerContent' as const,
        className:
            'fixed z-50 bg-background p-6 shadow-lg transition ease-in-out overflow-y-auto',
        styles: {},
    },
};
