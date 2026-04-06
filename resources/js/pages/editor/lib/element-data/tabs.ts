import { v4 as uuidv4 } from 'uuid';
import paragraph from './paragraph';
import tabsContent from './tabsContent';
import tabsList from './tabsList';
import tabsTrigger from './tabsTrigger';

export default {
    elementDetails: {
        content: [
            {
                ...tabsList.elementDetails,
                content: [
                    {
                        ...tabsTrigger.elementDetails,
                        content: [
                            {
                                ...tabsTrigger.elementDetails.content[0],
                                content: { innerText: 'Account' },
                            },
                        ],
                    },
                    {
                        ...tabsTrigger.elementDetails,
                        content: [
                            {
                                ...tabsTrigger.elementDetails.content[0],
                                content: { innerText: 'Password' },
                            },
                        ],
                    },
                ],
            },
            {
                ...tabsContent.elementDetails,
                content: [
                    {
                        ...paragraph.elementDetails,
                        content: {
                            innerText: 'Make changes to your account here.',
                        },
                        className: 'text-sm',
                    },
                ],
            },
            {
                ...tabsContent.elementDetails,
                content: [
                    {
                        ...paragraph.elementDetails,
                        content: { innerText: 'Change your password here.' },
                        className: 'text-sm',
                    },
                ],
            },
        ],
        id: uuidv4(),
        name: 'Tabs',
        type: 'tabs' as const,
        className: 'w-full',
        styles: {},
    },
};
