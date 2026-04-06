import { v4 as uuidv4 } from 'uuid';
import span from './span';

export default {
   elementDetails: {
      content: [
         {
            ...span.elementDetails,
            content: { innerText: 'Accordion Trigger' },
         },
      ],
      id: uuidv4(),
      name: 'Accordion Trigger',
      type: 'accordionTrigger' as const,
      className: 'flex flex-1 items-center justify-between p-4 text-sm font-medium transition-all cursor-pointer',
      styles: {},
   },
};
