import {
   EditorAccordion,
   EditorAccordionContent,
   EditorAccordionItem,
   EditorAccordionTrigger,
   EditorContainer,
   EditorDiv,
   EditorHeading,
   EditorIcon,
   EditorParagraph,
   EditorSection,
} from '@/pages/editor/lib/components';

const faqsSection = () => {
   return (
      <EditorSection className="bg-gray-50 py-20">
         <EditorContainer className="px-4">
            <EditorDiv className="mb-12 text-center">
               <EditorHeading level="h2" className="mb-4 text-4xl font-bold text-gray-900">
                  Frequently Asked Questions
               </EditorHeading>
               <EditorParagraph className="text-lg text-gray-600">Find answers to common questions about our platform</EditorParagraph>
            </EditorDiv>

            <EditorAccordion className="space-y-4">
               <EditorAccordionItem className="rounded-lg border border-gray-200 bg-white">
                  <EditorAccordionTrigger className="flex w-full items-center justify-between bg-gray-100 px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-200">
                     <EditorParagraph className="text-lg font-semibold">What is WebBuilder and how does it work?</EditorParagraph>

                     <EditorIcon name="chevron-down" className="h-5 w-5" />
                  </EditorAccordionTrigger>
                  <EditorAccordionContent className="px-6 pb-4">
                     <EditorParagraph>
                        WebBuilder is a hybrid page builder that combines code-first development with visual editing. Developers can write pages in
                        JSX format, while non-technical users can edit the same pages using our intuitive visual editor. All changes are synchronized
                        in real-time, making it perfect for teams with mixed skill levels.
                     </EditorParagraph>
                  </EditorAccordionContent>
               </EditorAccordionItem>

               <EditorAccordionItem className="rounded-lg border border-gray-200 bg-white">
                  <EditorAccordionTrigger className="flex w-full items-center justify-between bg-gray-100 px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-200">
                     <EditorParagraph className="text-lg font-semibold">Do I need coding experience to use WebBuilder?</EditorParagraph>

                     <EditorIcon name="chevron-down" className="h-5 w-5" />
                  </EditorAccordionTrigger>
                  <EditorAccordionContent className="px-6 pb-4">
                     <EditorParagraph>
                        No coding experience is required! While developers can leverage the full power of JSX, our visual editor makes it easy for
                        anyone to create and edit beautiful websites. You can drag, drop, and configure elements without writing a single line of
                        code.
                     </EditorParagraph>
                  </EditorAccordionContent>
               </EditorAccordionItem>

               <EditorAccordionItem className="rounded-lg border border-gray-200 bg-white">
                  <EditorAccordionTrigger className="flex w-full items-center justify-between bg-gray-100 px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-200">
                     <EditorParagraph className="text-lg font-semibold">Can I use my own custom components?</EditorParagraph>

                     <EditorIcon name="chevron-down" className="h-5 w-5" />
                  </EditorAccordionTrigger>
                  <EditorAccordionContent className="px-6 pb-4">
                     <EditorParagraph>
                        Absolutely! WebBuilder supports custom React components. You can create reusable components in code and make them available in
                        the visual editor. This gives you the flexibility to extend the platform with your own design system and functionality.
                     </EditorParagraph>
                  </EditorAccordionContent>
               </EditorAccordionItem>

               <EditorAccordionItem className="rounded-lg border border-gray-200 bg-white">
                  <EditorAccordionTrigger className="flex w-full items-center justify-between bg-gray-100 px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-200">
                     <EditorParagraph className="text-lg font-semibold">What frameworks and technologies do you support?</EditorParagraph>

                     <EditorIcon name="chevron-down" className="h-5 w-5" />
                  </EditorAccordionTrigger>
                  <EditorAccordionContent className="px-6 pb-4">
                     <EditorParagraph>
                        WebBuilder is built with React and TypeScript, and integrates seamlessly with modern frameworks like Next.js. We support
                        Tailwind CSS for styling, and provide full TypeScript type safety. Our platform is designed to work with your existing tech
                        stack.
                     </EditorParagraph>
                  </EditorAccordionContent>
               </EditorAccordionItem>

               <EditorAccordionItem className="rounded-lg border border-gray-200 bg-white">
                  <EditorAccordionTrigger className="flex w-full items-center justify-between bg-gray-100 px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-200">
                     <EditorParagraph className="text-lg font-semibold">Is there a free trial available?</EditorParagraph>

                     <EditorIcon name="chevron-down" className="h-5 w-5" />
                  </EditorAccordionTrigger>
                  <EditorAccordionContent className="px-6 pb-4">
                     <EditorParagraph>
                        Yes! We offer a 14-day free trial on all plans with no credit card required. This gives you full access to explore all
                        features and see if WebBuilder is the right fit for your needs. You can upgrade, downgrade, or cancel at any time.
                     </EditorParagraph>
                  </EditorAccordionContent>
               </EditorAccordionItem>
            </EditorAccordion>
         </EditorContainer>
      </EditorSection>
   );
};

export default faqsSection;
