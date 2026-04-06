import { v4 as uuidv4 } from 'uuid';
import drawerContent from './drawerContent';
import drawerTrigger from './drawerTrigger';

export default {
    elementDetails: {
        content: [drawerTrigger.elementDetails, drawerContent.elementDetails],
        id: uuidv4(),
        name: 'Drawer',
        type: 'drawer' as const,
        className: 'relative inline-block',
        styles: {},
    },
};
