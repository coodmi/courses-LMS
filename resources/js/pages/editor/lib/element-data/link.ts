import { v4 as uuidv4 } from 'uuid';
import span from './span';

export default {
   elementDetails: {
      content: [
         {
            ...span.elementDetails,
            content: { innerText: 'Link Text' },
         },
      ],
      id: uuidv4(),
      name: 'Link',
      type: 'link' as const,
      className: '',
      styles: {},
      htmlAttributes: {
         href: '#',
         type: 'native', // 'native' for native anchor tag, 'inertia' for Inertia Link
      },
   },
};
