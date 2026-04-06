import { v4 as uuidv4 } from 'uuid';
import accordionItem from './accordionItem';

export default {
    elementDetails: {
        content: [accordionItem.elementDetails],
        id: uuidv4(),
        name: 'Accordion',
        type: 'accordion' as const,
        className: 'w-full',
        styles: {},
    },
};
