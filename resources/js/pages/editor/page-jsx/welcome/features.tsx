import { EditorContainer, EditorDiv, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const featureSection = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="px-4">
            <EditorDiv className="mb-12 text-center">
               <EditorHeading level="h2" className="mb-4 text-4xl font-bold text-gray-900">
                  Why Choose Our Platform?
               </EditorHeading>
               <EditorParagraph className="mx-auto max-w-2xl text-lg text-gray-600">
                  Everything you need to build modern, responsive websites with ease.
               </EditorParagraph>
            </EditorDiv>

            <EditorDiv className="grid grid-cols-1 gap-8 md:grid-cols-3">
               {/* Feature 1 */}
               <EditorDiv className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                  <EditorDiv className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                     <EditorParagraph className="text-2xl">💻</EditorParagraph>
                  </EditorDiv>
                  <EditorHeading level="h3" className="mb-3 text-xl font-semibold text-gray-900">
                     Code-First Approach
                  </EditorHeading>
                  <EditorParagraph>
                     Write pages using familiar JSX syntax. Perfect for developers who prefer code over drag-and-drop interfaces.
                  </EditorParagraph>
               </EditorDiv>

               {/* Feature 2 */}
               <EditorDiv className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                  <EditorDiv className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                     <EditorParagraph className="text-2xl">🎨</EditorParagraph>
                  </EditorDiv>
                  <EditorHeading level="h3" className="mb-3 text-xl font-semibold text-gray-900">
                     Visual Editor
                  </EditorHeading>
                  <EditorParagraph>
                     Non-technical users can edit the same pages visually. Changes sync automatically between code and visual modes.
                  </EditorParagraph>
               </EditorDiv>

               {/* Feature 3 */}
               <EditorDiv className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                  <EditorDiv className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                     <EditorParagraph className="text-2xl">⚡</EditorParagraph>
                  </EditorDiv>
                  <EditorHeading level="h3" className="mb-3 text-xl font-semibold text-gray-900">
                     Lightning Fast
                  </EditorHeading>
                  <EditorParagraph>
                     Built with performance in mind. Auto-generated UUIDs, optimized rendering, and instant preview updates.
                  </EditorParagraph>
               </EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default featureSection;
