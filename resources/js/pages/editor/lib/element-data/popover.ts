import { v4 as uuidv4 } from 'uuid';
import popoverContent from './popoverContent';
import popoverTrigger from './popoverTrigger';

export default {
    elementDetails: {
        content: [popoverTrigger.elementDetails, popoverContent.elementDetails],
        id: uuidv4(),
        name: 'Popover',
        type: 'popover' as const,
        className: 'relative inline-block',
        styles: {},
    },
};
