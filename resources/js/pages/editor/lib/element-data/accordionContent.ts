import { v4 as uuidv4 } from 'uuid';

export default {
   elementDetails: {
      content: [],
      id: uuidv4(),
      name: 'Accordion Content',
      type: 'accordionContent' as const,
      className: 'p-4 pt-0 text-sm',
      styles: {},
   },
};
